import ComTableColumn from '../table/src/table-column';

/* istanbul ignore next */
ComTableColumn.install = function(Vue) {
  Vue.component(ComTableColumn.name, ComTableColumn);
};

export default ComTableColumn;
