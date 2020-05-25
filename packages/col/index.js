import ComCol from './src/col';

/* istanbul ignore next */
ComCol.install = function(Vue) {
  Vue.component(ComCol.name, ComCol);
};

export default ComCol;

