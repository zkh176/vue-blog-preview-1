import Vue from 'vue'
import Router from 'vue-router'
/*
import Login from "../pages/Login/login.vue";
import Create from "../pages/Create/create.vue";
import Detail from "../pages/Detail/detail.vue";
import Edit from "../pages/Edit/edit.vue";
import My from "../pages/My/my.vue";
import Register from "../pages/Register/register.vue";
import User from "../pages/User/user.vue";
import Index from "../pages/Index/page-index.vue";
*/
import store from '../store'

Vue.use(Router)

/*
const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: {requiresAuth: true}
    },
    {
      path: '/create',
      component: Create,
      meta: {requiresAuth: true}
    },
    {
      path: '/user/:blogId',
      component: User
    },
    {
      path: '/my',
      component: My,
      meta: {requiresAuth: true}
    }
  ]
})
*/

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/Index/page-index.vue')
    },
    {
      path: '/login',
      component: () => import('../pages/Login/login.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('../pages/Detail/detail.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('../pages/Edit/edit.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/create',
      component: () => import('../pages/Create/create.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/user/:userId',
      component: () => import('../pages/User/user.vue')
    },
    {
      path: '/my',
      component: () => import('../pages/My/my.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/register',
      component: () => import('../pages/Register/register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    })
  } else {
    next()//确保一定要调用next()
  }
})

export default router;
