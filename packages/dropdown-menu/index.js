import ComDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
ComDropdownMenu.install = function(Vue) {
  Vue.component(ComDropdownMenu.name, ComDropdownMenu);
};

export default ComDropdownMenu;
