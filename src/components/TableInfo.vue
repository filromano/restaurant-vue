<template>
  <div class="container side-padding">
    <button @click="removeSelectedTable"
          class="another-table">
      Select another table
    </button>
    <div>
      <h2 class="table-title">Selected Table: {{ selectedTable.table }}</h2>
    </div>
    <div class="values">
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
          <input type="number" v-model="paying">
          <button @click="addPayment">Register</button>
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
        this.registerPayment(this.paying);
        this.getTotalPaid();
        this.sumBill();
        this.getMissingPayment();
        this.paying = '';
      }
    },
  },
};
</script>

<style scopped lang="scss">
  @import '@/assets/styles/general.scss';

  .side-padding {
    padding: 0 20px;
  }

  .another-table{
    display: block;
    background: $pink;
    margin-bottom: 20px;
    @media screen and (min-width: $desktop-breakpoint){
      display: none;
    }
  }

  .table-title{
    display: block;
    margin:  0 0 10px 10px;
  }

  .values{
    display: flex;
    flex-direction: column;
    width: 100%;
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
  }
  .total{
    background: $purple;
  }
  .already-paid{
    background: $green;
  }
  .missing-payment{
    background: $lightpink;
  }

  .details{
    display: flex;
    flex-direction: column;
    width: 100%;
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
