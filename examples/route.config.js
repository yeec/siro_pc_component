import navConfig from './nav.config';

const load = function(path) {
  return r => require.ensure([], () => r(require(`./pages/template-vue/${path}.vue`)), 'template-vue');
};

const loadDocs = function(path) {
  return r => require.ensure([], () => r(require(`./docs/explain${path}.md`)), 'explain');
};

const registerRoute = (navConfig) => {
  let route = [];
  Object.keys(navConfig).forEach((nav, index) => {
    let navs = navConfig[nav];
    route.push({
      path: '/component',
      redirect: '/component/installation',
      component: load('component'),
      children: []
    });
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, index);
        });
      } else {
        addRoute(nav, index);
      }
    });
  });
  function addRoute(page, index) {
    const component = page.path === '/changelog'
      ? load('changelog')
      : loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang: 'nav'
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }
  return route;
};

let route = registerRoute(navConfig);

const generateMiscRoutes = function() {
  let guideRoute = {
    path: '/guide', // 指南
    redirect: '/guide/design',
    component: load('guide'),
    children: [{
      path: 'design', // 设计原则
      name: 'guide-design',
      meta: 'nav',
      component: load('design')
    }, {
      path: 'nav', // 导航
      name: 'guide-nav',
      meta: 'nav',
      component: load('nav')
    }]
  };

  let themeRoute = {
    path: '/theme',
    component: load('theme-nav'),
    children: [
      {
        path: '/', // 主题管理
        name: 'theme',
        meta: 'nav',
        component: load('theme')
      },
      {
        path: 'preview', // 主题预览编辑
        name: 'theme-preview',
        meta: 'nav',
        component: load('theme-preview')
      }]
  };

  let resourceRoute = {
    path: '/resource', // 资源
    meta: 'resource',
    name: 'nav',
    component: load('resource')
  };

  let indexRoute = {
    path: '/', // 首页
    meta: 'home',
    name: 'nav',
    component: load('index')
  };

  return [guideRoute, resourceRoute, themeRoute, indexRoute];
};

route = route.concat(generateMiscRoutes());

route.push({
  path: '/play',
  name: 'play',
  component: require('./play/index.vue')
});

let defaultPath = '/component/installation';

route = route.concat([{
  path: '/',
  redirect: defaultPath
}]);

export default route;
