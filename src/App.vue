<template>
  <div id="app">
    <h1>Select a table to add payment</h1>
    <Tables />
  </div>
</template>

<script>
import Tables from './components/Tables.vue';

export default {
  components: {
    Tables,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  
  body{
    background: rgba(58, 176, 174, 0.3);
    font-family: 'Nunito', sans-serif;
  }
  #app{
    width: 100%;
  }
</style>
