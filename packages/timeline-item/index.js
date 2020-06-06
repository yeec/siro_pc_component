import ComTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
ComTimelineItem.install = function(Vue) {
  Vue.component(ComTimelineItem.name, ComTimelineItem);
};

export default ComTimelineItem;
