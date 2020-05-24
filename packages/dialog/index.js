import ComDialog from './src/component';

/* istanbul ignore next */
ComDialog.install = function(Vue) {
  Vue.component(ComDialog.name, ComDialog);
};

export default ComDialog;
