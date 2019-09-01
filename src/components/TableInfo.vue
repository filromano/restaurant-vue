<template>
  <div class="container side-padding">
    <div class="values">
      <div>
        <h2 class="table-title">Selected Table: {{ selectedTable.table }}</h2>
      </div>
      <button @click="removeSelectedTable"
          class="another-table">
        Select another table
      </button>
      <div class="total">
        <p>Total: <span>{{ selectedTable.total | addMoney}}</span></p>
      </div>
      <div class="already-paid">
        <p>Already Paid: <span>{{ selectedTable.totalPaid | addMoney}}</span></p>
      </div>
      <div class="missing-payment">
        <p>Missing payment: <span>{{ selectedTable.missingPayment | addMoney}}</span></p>
      </div>
    </div>
    <div class="details">
      <div class="add-payment">
        <p>
          <span>Add a payment</span>
          <input type="number"
                 v-model="paying"
                 @keypress="checkIfNumber($event)">
          <button @click="addPayment">Register</button>
          <span class="error"
                v-if="showError">
            You are trying to register a number bigger than missing payment
          </span>
        </p>
      </div>
      <div class="orders">
        <p>
          Orders
        </p>
        <ul>
          <li v-for="order in selectedTable.orders" :key="order.index">
            <span>{{ order.name }}:</span> {{ order.price | addMoney }}
          </li>
        </ul>
      </div>
      <div class="payments">
        <p>
          Payments
        </p>
        <ul>
          <li v-for="payment in selectedTable.payments" :key="payment.index">
            {{ payment | addMoney }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      paying: null,
      showError: false,
    };
  },
  computed: {
    ...mapState(['selectedTable']),
  },
  filters: {
    addMoney(value) {
      return `R$${value}.00`;
    },
  },
  methods: {
    ...mapActions(['registerPayment', 'getTotalPaid', 'sumBill', 'getMissingPayment', 'removeSelectedTable']),
    addPayment() {
      if (this.paying !== null && this.paying !== '') {
        if(this.selectedTable.missingPayment < this.paying){
          this.showError = true;
        } else {
          this.registerPayment(this.paying);
          this.getTotalPaid();
          this.sumBill();
          this.getMissingPayment();
          this.paying = '';
          this.showError = false;
        }
      }
    },
    checkIfNumber(evt) {
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

<style scopped lang="scss">
  @import '@/assets/styles/general.scss';

  .side-padding {
    padding: 0 20px;
    >div{
      padding: 0 20px;
      box-sizing: border-box;
    }
  }

  .another-table{
    display: block;
    max-width: 300px;
    background: $pink;
    margin-bottom: 20px;
  }

  .table-title{
    display: block;
    margin:  0 0 10px 10px;
    color: black;
  }

  .values{
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    div{
      padding: 20px;
      margin-bottom: 10px;
      p{
        font-size: 18px;
        text-align: center;
        margin: 0;
        span{
          font-weight: 900;
        }
      }
    }
    @media screen and (min-width: $desktop-breakpoint) {
      width: 50%;
    }
  }
  .total{
    background: $purple;
  }
  .already-paid{
    background: $green;
  }
  .missing-payment{
    background: $lightpink;
    span{
      color: black;
    }
  }

  .details{
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: $desktop-breakpoint) {
      width: 50%;
    }
  }

  .add-payment{
    display: block;
    width: 100%;
    span{
      width: 100%;
      font-size: 18px;
      font-weight: 900;
    }
    input{
      display: block;
      padding: 10px;
      margin: 20px 0;
      font-size: 18px;
    }
    button{
      display: block;
      background: $purple;
      padding: 10px 20px;
      font-size: 18px;
    }
  }

  .orders{
    @extend .details-div;
    background: $pink;
    li{
      margin-bottom: 5px;
    }
  }

  .payments{
    @extend .details-div;
    background: $green;
    li{
      margin-bottom: 5px;
    }
  }
</style>
