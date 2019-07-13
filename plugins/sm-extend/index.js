import Vue from 'vue'
import files from './modules/htmlResources-helper';

export default function () {
  Vue.prototype.$htmlResources = files;
}