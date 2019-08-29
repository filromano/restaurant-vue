const selectTable = ({ state, commit }, value) => {
  Object.keys(state.tables).forEach((element) => {
    if (element === value.table) {
      commit('updateSelectedTable', value);
    }
  });
};

const sumBill = ({ state, commit }) => {
  let result = 0;
  state.selectedTable.orders.forEach((element) => {
    result += element.price;
  });
  commit('updateTotal', result);
};

const getTotalPayed = ({ state, commit }) => {
  let result = 0;
  state.selectedTable.payments.forEach((element) => {
    result += element;
  });
  commit('updateTotalPayed', result);
};

const getMissingPayment = ({ state, commit }) => {
  const result = state.selectedTable.total - state.selectedTable.totalPayed;
  commit('updateMissingPayment', result);
};

const registerPayment = ({ commit }, value) => {
  const number = parseInt(value, 10);
  commit('updatePayments', number);
};

export default {
  selectTable,
  sumBill,
  getTotalPayed,
  getMissingPayment,
  registerPayment,
};
