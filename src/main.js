import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import ReadMore from 'vue-read-more';


Vue.config.productionTip = false
Vue.use(ReadMore);
Vue.use(Antd);


new Vue({
  router,
  store,
  render: h => h(App),
  components: { App }
}).$mount('#app')

