import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'

import Home from './components/Home'
import AutoComplete from './components/AutoComplete'
import Pricing from './components/Pricing'
import Forms from './components/Forms'
import AutoLogout from './components/AutoLogout'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/autocomplete', component: AutoComplete},
    {path: '/pricing', component: Pricing},
    {path: '/forms', component: Forms},
    {path: '/logout', component: AutoLogout},
  ],

  mode: 'history',

});

new Vue({

  router, 

  render: h => h(App),

}).$mount('#app')
