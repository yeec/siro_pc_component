import ComSteps from './src/steps';

/* istanbul ignore next */
ComSteps.install = function(Vue) {
  Vue.component(ComSteps.name, ComSteps);
};

export default ComSteps;
