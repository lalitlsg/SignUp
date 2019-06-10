import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup'
import Welcome from './views/Welcome'
import * as firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },{
      path:'/welcome',
      name:'welcome',
      component:Welcome,
      meta:{
        requiresAuth:true
      }
    }
  ]
})

//guards

router.beforeEach((to,from,next) => {
  //check for requiresAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
    //check if not logged in
    if(!firebase.auth().currentUser){
      //go to signin page
      next({
        path:'/',
        query:{
          redirect:to.fullPath
        }
      });
    }
    else{
      //proceed 
      next();
    }
  }
  else{
    next();
  }
})

export default router;