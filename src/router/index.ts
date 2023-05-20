import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AuthLayoutLogin from '../layouts/AuthLayoutLogin.vue'
import AppLayout from '../layouts/AppLayout.vue'
import Page404Layout from '../layouts/Page404Layout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'fondos',
        path: 'fondos',
        component: () => import('../pages/admin/fondos/Fondos.vue'),
      },
    ]
  },/*
  {
    path:'/contabilidad',
    component: AppLayout,
    children: [
      {
        name: 'librodiario',
        path: 'librodiario',
        component: () => import('../pages/admin/contabilidad/LibroDiario.vue'),
      },
      {
        name: 'libromayoranalitico',
        path: 'libromayoranalitico',
        component: () => import('../pages/admin/contabilidad/LibroMayorAnalitico.vue'),

      },
      {
        name: 'balanceconsolidado',
        path: 'balanceconsolidado',
        component: () => import('../pages/admin/contabilidad/BalanceConsolidado.vue'),

      },
    ]
  },*/
  {path: '/auth',
  component: AuthLayoutLogin,
  children: [
    {
      name: 'login',
      path: 'login',
      component: () => import('../pages/auth/login/Login.vue'),
    },
    {
      name: 'signup',
      path: 'signup',
      component: () => import('../pages/auth/signup/Signup.vue'),
    },
    {
      name: 'recover-password',
      path: 'recover-password',
      component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
    },
    {
      path: '',
      redirect: { name: 'login' },
    },
  ]}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
})

export default router
