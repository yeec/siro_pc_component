import ComStep from '../steps/src/step';

/* istanbul ignore next */
ComStep.install = function(Vue) {
  Vue.component(ComStep.name, ComStep);
};

export default ComStep;
