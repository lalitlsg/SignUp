import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyBAvAXGiKzbDq5pidj4dUBzlehlP1UVp4U",
      authDomain: "signup-24552.firebaseapp.com",
      databaseURL: "https://signup-24552.firebaseio.com",
      projectId: "signup-24552",
      storageBucket: "signup-24552.appspot.com",

    })
  }
}).$mount('#app')
