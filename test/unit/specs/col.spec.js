import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <com-col :span="12">
        </com-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('com-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <com-col :span="12">
        </com-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <com-col :span="12" :pull="3">
        </com-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <com-col :span="12" :push="3">
        </com-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <com-row :gutter="20">
          <com-col :span="12" ref="col">
          </com-col>
        </com-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <com-row :gutter="20">
          <com-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </com-col>
        </com-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('el-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('el-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('el-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('el-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('el-col-md-8')).to.be.true;
  });
});
