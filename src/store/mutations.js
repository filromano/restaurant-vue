const updateSelectedTable = (state, value) => {
  state.selectedTable = value;
};

const updateTotal = (state, value) => {
  state.selectedTable.total = value;
};

const updateTotalPayed = (state, value) => {
  state.selectedTable.totalPayed = value;
};

const updateMissingPayment = (state, value) => {
  state.selectedTable.missingPayment = value;
};

const updatePayments = (state, value) => {
  const { table } = state.selectedTable;
  state.tables.forEach((element) => {
    if (element.table === table) {
      element.payments.push(value);
    }
  });
};

export default {
  updateSelectedTable,
  updateTotal,
  updateTotalPayed,
  updateMissingPayment,
  updatePayments,
};
