import ComButton from './src/button';

/* istanbul ignore next */
ComButton.install = function(Vue) {
  Vue.component(ComButton.name, ComButton);
};

export default ComButton;
