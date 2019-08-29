const updateSelectedTable = (state, value) => {
  state.selectedTable = value;
};

const updateTotal = (state, value) => {
  state.selectedTable.total = value;
};

const updateTotalPaid = (state, value) => {
  state.selectedTable.totalPaid = value;
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
  updateTotalPaid,
  updateMissingPayment,
  updatePayments,
};
