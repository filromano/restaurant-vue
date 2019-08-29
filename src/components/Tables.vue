<template>
  <div>
    <h1>Select the table</h1>
    <button v-for="item in tables"
            :key="item.table"
            @click="checkTable(item)">
      {{ item.table }}
    </button>
    <div>
      <p>Total: {{ selectedTable.total }}</p>
      <p>Already Payed: {{ selectedTable.totalPayed }}</p>
      <p>Missing payment: {{ selectedTable.missingPayment }}</p>
    </div>
    <div>
      <p>
        Orders
      </p>
      <ul>
        <li v-for="order in selectedTable.orders" :key="order.index">
          {{ order.name }}: {{ order.price }}
        </li>
      </ul>
    </div>
    <div>
      <p>
        Payments
      </p>
      <ul>
        <li v-for="payment in selectedTable.payments" :key="payment.index">
          {{ payment }}
        </li>
      </ul>
    </div>
    <div>
      <p>
        <label for="addpayment">Add a payment</label>
        <input type="number" v-model="paying">
        <button @click="addPayment">Register</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      paying: '',
    };
  },
  computed: {
    ...mapState(['tables', 'selectedTable']),
  },
  methods: {
    ...mapActions(['selectTable', 'sumBill', 'getTotalPayed', 'getMissingPayment', 'registerPayment']),
    checkTable(item) {
      this.selectTable(item);
      this.getTotalPayed();
      this.sumBill();
      this.getMissingPayment();
    },
    addPayment() {
      this.registerPayment(this.paying);
      this.getTotalPayed();
      this.sumBill();
      this.getMissingPayment();
      this.paying = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
