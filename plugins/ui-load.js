import Vue from 'vue'

/**
 * element组件
 */
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/display.css';

/**
 * lodash模块
 */
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'



/**
 * 懒加载
 */
import VueLazyLoad from 'vue-lazyload'


/**
 * 使用element-ui
 */
Vue.use(Element, {
  locale
})

/**
 * 载入全局组件
 */
const requireComponent = require.context("../components/global/", false, /[\w-]+\.vue$/)
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/_/, '').replace(/\.\w+$/, '')));
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.use(VueLazyLoad, {
  preLoad: 1,
  attempt: 3,     
  listenEvents: ["scroll"],
  lazyComponent: true
});
