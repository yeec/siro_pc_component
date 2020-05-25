import ComProgress from './src/progress';

/* istanbul ignore next */
ComProgress.install = function(Vue) {
  Vue.component(ComProgress.name, ComProgress);
};

export default ComProgress;
