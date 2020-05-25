import ComOption from '../select/src/option';

/* istanbul ignore next */
ComOption.install = function(Vue) {
  Vue.component(ComOption.name, ComOption);
};

export default ComOption;
