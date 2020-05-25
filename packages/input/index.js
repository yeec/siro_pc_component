import ComInput from './src/input';

/* istanbul ignore next */
ComInput.install = function(Vue) {
  Vue.component(ComInput.name, ComInput);
};

export default ComInput;
