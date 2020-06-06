import ComSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
ComSubmenu.install = function(Vue) {
  Vue.component(ComSubmenu.name, ComSubmenu);
};

export default ComSubmenu;
