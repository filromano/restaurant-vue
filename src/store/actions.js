// get selected Table from array and add to selectedTable state
const selectTable = ({ state, commit }, value) => {
  Object.keys(state.tables).forEach((element) => {
    if (element === value.table) {
      commit('updateSelectedTable', value);
    }
  });
};

// sum all the items from the orders
const sumBill = ({ state, commit }) => {
  let result = 0;
  state.selectedTable.orders.forEach((element) => {
    result += element.price;
  });
  commit('updateTotal', result);
};

// sum all the payments that were already made
const getTotalPaid = ({ state, commit }) => {
  let result = 0;
  state.selectedTable.payments.forEach((element) => {
    result += element;
  });
  commit('updateTotalPaid', result);
};

// subtracts the total bill from total already paid
const getMissingPayment = ({ state, commit }) => {
  const result = state.selectedTable.total - state.selectedTable.totalPaid;
  commit('updateMissingPayment', result);
};

// register a new payment into the payments array of the selected Table
const registerPayment = ({ commit }, value) => {
  const number = parseInt(value, 10);
  commit('updatePayments', number);
};


// remove the selected table to choose a new one only for mobile
const removeSelectedTable = ({ commit }) => {
  const obj = {};
  commit('updateSelectedTable', obj);
};

export default {
  selectTable,
  sumBill,
  getTotalPaid,
  getMissingPayment,
  registerPayment,
  removeSelectedTable,
};
