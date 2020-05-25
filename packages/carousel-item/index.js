import ComCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
ComCarouselItem.install = function(Vue) {
  Vue.component(ComCarouselItem.name, ComCarouselItem);
};

export default ComCarouselItem;
