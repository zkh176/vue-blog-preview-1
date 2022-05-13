import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login/login.vue";
import Create from "../pages/Create/create.vue";
import Detail from "../pages/Detail/detail.vue";
import Edit from "../pages/Edit/edit.vue";
import My from "../pages/My/my.vue";
import Register from "../pages/Register/register.vue";
import User from "../pages/User/user.vue";
import Index from "../pages/Index/page-index";

Vue.use(Router)

export default new Router({
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
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    }
  ]
})
