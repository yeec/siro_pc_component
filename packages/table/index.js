import ComTable from './src/table';

/* istanbul ignore next */
ComTable.install = function(Vue) {
  Vue.component(ComTable.name, ComTable);
};

export default ComTable;
