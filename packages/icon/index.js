import ComIcon from './src/icon.vue';

/* istanbul ignore next */
ComIcon.install = function(Vue) {
  Vue.component(ComIcon.name, ComIcon);
};

export default ComIcon;
