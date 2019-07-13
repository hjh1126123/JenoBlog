import Vue from 'vue'

/**
 * 限制字数
 */
Vue.filter('cut', function (value, length) {
  if (!value) return ''
  if (!length) return value;
  
  return value.slice(0, length) + '...';
});
