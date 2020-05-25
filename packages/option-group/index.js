import ComOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
ComOptionGroup.install = function(Vue) {
  Vue.component(ComOptionGroup.name, ComOptionGroup);
};

export default ComOptionGroup;
