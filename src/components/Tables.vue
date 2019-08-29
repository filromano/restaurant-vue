<template>
  <div>
    <div class="container">
      <div v-for="item in tables"
           :key="item.table"
           @click="checkTable(item)"
           class="tables">
        {{ item.table }}
      </div>
    </div>
    <TableInfo v-if="Object.keys(selectedTable).length !== 0 " />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import TableInfo from './TableInfo.vue';

export default {
  components: {
    TableInfo,
  },
  computed: {
    ...mapState(['tables', 'selectedTable']),
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

  .tables{
    flex-basis: 100px;
    padding: 20px;
    text-align: center;
    margin: 5px;
    font-size: 24px;
    background : linear-gradient(135deg,$pink, $purple);
    border: 1px solid black;
    cursor: pointer;
    &:hover {
      background:linear-gradient(135deg, $purple, $pink);
    }
  }
</style>
