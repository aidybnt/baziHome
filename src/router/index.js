import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Index from "@/views/Index";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Forget from "@/views/Forget";
import doForget from "@/views/doForget";
import ProfileShow from "@/components/profile/ProfileShow";
import ProfileAdd from "@/components/profile/ProfileAdd";
import ProfileList from "@/components/profile/ProfileList";
import ProfileConfig from "@/components/profile/ProfileConfig";

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {title: '科学五行命理', keepAlive: true},
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profileShow',
    component: ProfileShow,
    meta: {
      title: '个人资料—科学五行命理',
      keepAlive: true,
      requireAuth: true
    },
    children: [
      {
        path: '/profileAdd',
        name: 'profileAdd',
        component: ProfileAdd,
        meta: {
          title: '添加命盘—科学五行命理',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/profileList',
        name: 'profileList',
        component: ProfileList,
        meta: {
          title: '命盘列表—科学五行命理',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/profileConfig',
        name: 'profileConfig',
        component: ProfileConfig,
        meta: {
          title: '添加命盘—科学五行命理',
          keepAlive: true,
          requireAuth: true
        }
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {title: '登陆—科学五行命理', keepAlive: true},
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {title: '注册—科学五行命理', keepAlive: true},
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget,
    meta: {title: '找回密码—科学五行命理', keepAlive: true},
  },
  {
    path: '/doForget',
    name: 'doForget',
    component: doForget,
    meta: {title: '找回密码—科学五行命理', keepAlive: true},
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
