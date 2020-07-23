import Vue from 'vue'
import App from './App.vue'
import '@/styles.scss';
import '@/config/AntConfig';
import '@/config/KendoConfig';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
