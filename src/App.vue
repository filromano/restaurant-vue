<template>
  <div id="app">
    <h1>Select a table to add payment</h1>
    <div class="row">
      <Tables :class="{ hide : showTable}" />
      <TableInfo v-if="Object.keys(selectedTable).length !== 0"
                 :class="{ hide : !showTable}" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import Tables from './components/Tables.vue';
import TableInfo from './components/TableInfo.vue';

export default {
  data() {
    return {
      showTable: false,
    };
  },
  components: {
    Tables,
    TableInfo,
  },
  computed: {
    ...mapState(['selectedTable']),
    ...mapGetters(['isTableSelected']),
  },
  watch: {
    isTableSelected(value) {
      if (Object.keys(value).length !== 0) {
        this.showTable = true;
      } else {
        this.showTable = false;
      }
    },
  },
};
</script>

<style lang="scss">
  @import './assets/styles/general.scss';

  body{
    background: rgba(58, 176, 174, 0.3);
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    h1{
      text-align: center;
    }
    button{
      display: block;
      padding: 10px 20px;
      font-size: 18px;
    }
  }
  #app{
    width: 100%;
  }

  .row{
    display: flex;
    >div{
      width: 100%;
    }
  }

  .hide{
    display: none;
  }
</style>
