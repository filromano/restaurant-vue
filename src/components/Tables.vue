<template>
  <div>
    <div class="container tables-content">
      <div v-for="item in tables"
           :key="item.table"
           @click="checkTable(item)"
           class="tables">
        {{ item.table }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['tables']),
  },
  methods: {
    ...mapActions(['selectTable', 'sumBill', 'getTotalPaid', 'getMissingPayment', 'registerPayment']),
    checkTable(item) {
      this.selectTable(item);
      this.getTotalPaid();
      this.sumBill();
      this.getMissingPayment();
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/general.scss';

  .tables-content{
    max-width: 800px;
    margin: auto;
  }

  .tables{
    flex-basis: 100px;
    padding: 20px;
    text-align: center;
    color: white;
    margin: 5px;
    font-size: 24px;
    background : linear-gradient(135deg,$pink, $purple);
    border: 1px solid black;
    cursor: pointer;
    &:hover {
      background: $purple;
    }
  }
</style>
