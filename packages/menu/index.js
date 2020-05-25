import ComMenu from './src/menu';

/* istanbul ignore next */
ComMenu.install = function(Vue) {
  Vue.component(ComMenu.name, ComMenu);
};

export default ComMenu;
