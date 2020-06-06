import ComTabs from './src/tabs';

/* istanbul ignore next */
ComTabs.install = function(Vue) {
  Vue.component(ComTabs.name, ComTabs);
};

export default ComTabs;
