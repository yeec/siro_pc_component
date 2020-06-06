import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <com-breadcrumb separator=">">
        <com-breadcrumb-item to="/">首页</com-breadcrumb-item>
        <com-breadcrumb-item>活动管理</com-breadcrumb-item>
        <com-breadcrumb-item>活动列表</com-breadcrumb-item>
        <com-breadcrumb-item>活动详情</com-breadcrumb-item>
      </com-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.el-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
