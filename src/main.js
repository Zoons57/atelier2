import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bulma from './../node_modules/bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free/css/all.min.css';
import Cloudinary from 'cloudinary-vue';
import axios from 'axios';


window.axios = axios.create({
  baseURL:'https://geoquizzapi.000webhostapp.com/',
  params : {
    token : false
  },
  headers: {

    },

});

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "hugopallara"
  }

});
Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
