/*
 * @Author: your name
 * @Date: 2020-11-13 21:44:25
 * @LastEditTime: 2020-11-28 17:44:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import Toast from 'vue-toastification';
// Toast 样式
// import 'vue-toastification/dist/index.css';
import VueDND from 'awe-dnd'
// 导入拖拽组件
Vue.use(VueDND)


// 暂时不用这个tosash组件
// Vue.use(Toast, {
//   transition: 'Vue-Toastification__bounce',
//   maxToasts: 3,
//   newestOnTop: true,
//   position: 'top-right',
//   timeout: 2000,
//   closeOnClick: true,
//   pauseOnFocusLoss: true,
//   pauseOnHover: false,
//   draggable: true,
//   draggablePercent: 0.7,
//   showCloseButtonOnHover: false,
//   hideProgressBar: true,
//   closeButton: 'button',
//   icon: true,
//   rtl: false,
// });


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
