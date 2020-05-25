import { createVue, destroyVM } from '../util';

describe('Popconfirm', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  describe('trigger', () => {
    const createVM = () => {
      return createVue(`
        <div>
          <com-popconfirm
            ref="popover"
            title="content">
            <button slot="reference">trigger</button>
          </com-popconfirm>
        </div>
      `, true);
    };
    it('click', () => {
      vm = createVM();
      vm.$el.querySelector('button').click();
      document.body.click();
      expect(document.body.querySelector('.el-popconfirm__action').style.display).to.equal('');
    });
  });

});
