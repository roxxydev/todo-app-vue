'use strict';

import Vue from 'vue';
import DotEnv from 'dotenv';
import store from './Store';
import App from './App.vue';

DotEnv.config();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
