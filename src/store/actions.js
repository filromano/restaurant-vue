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

const getTotalPaid = ({ state, commit }) => {
  let result = 0;
  state.selectedTable.payments.forEach((element) => {
    result += element;
  });
  commit('updateTotalPaid', result);
};

const getMissingPayment = ({ state, commit }) => {
  const result = state.selectedTable.total - state.selectedTable.totalPaid;
  commit('updateMissingPayment', result);
};

const registerPayment = ({ commit }, value) => {
  const number = parseInt(value, 10);
  commit('updatePayments', number);
};

export default {
  selectTable,
  sumBill,
  getTotalPaid,
  getMissingPayment,
  registerPayment,
};
