import ComTag from './src/tag';

/* istanbul ignore next */
ComTag.install = function(Vue) {
  Vue.component(ComTag.name, ComTag);
};

export default ComTag;
