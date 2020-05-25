import ComMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
ComMenuItem.install = function(Vue) {
  Vue.component(ComMenuItem.name, ComMenuItem);
};

export default ComMenuItem;
