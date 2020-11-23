import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from 'vue-toastification';
// Toast 样式
import 'vue-toastification/dist/index.css';
import VueDND from 'awe-dnd'
// 导入拖拽组件
Vue.use(VueDND)


Vue.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 3,
  newestOnTop: true,
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false,
});

Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
