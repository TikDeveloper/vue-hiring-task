import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import VueMeta from 'vue-meta';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false;

Vue.use(VueMeta);
Vue.use(Vuelidate)


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
