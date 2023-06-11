import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'login' },
  },
  {path: '/auth',
  component: AuthLayout,
  children: [
    {
      name: 'login',
      path: 'login',
      component: () => import('../pages/auth/login/Login.vue'),
    },
    {
      name: 'recover-password',
      path: 'recover-password',
      component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
    },
    {
      name: 'changepassword',
      path: 'changepassword',
      component: () => import('../pages/auth/change-password/ChangePassword.vue'),
    },
    {
      name: 'logout',
      path: 'logout',
      beforeEnter: (to, from, next) => {
        console.log('entro aqui logout')
        localStorage.removeItem('store');
        next('/login'); // Redirige al componente de inicio de sesión
        
      },
      component: () => null,
    },
    {
      path: '',
      redirect: { name: 'login' },
    },
  ]},
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        meta: { requiresAuth: true },// Marcar la ruta como protegida
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'producto',
        path: 'producto',
        meta: { requiresAuth: true },// Marcar la ruta como protegida
        component: () => import('../pages/admin/inventario/producto/Producto.vue'),
      },  
      {
        name: 'valores',
        path: 'valores',
        meta: { requiresAuth: true },// Marcar la ruta como protegida
        component: () => import('../pages/admin/inventario/valores/Valores.vue'),
      },  
      {
        name: 'clientes',
        path: 'clientes',
        meta: { requiresAuth: true },// Marcar la ruta como protegida
        component: () => import('../pages/admin/usuarios/Clientes/Cliente.vue'),
      },
      {
        name: 'proveedor',
        path: 'proveedor',
        meta: { requiresAuth: true },// Marcar la ruta como protegida
        component: () => import('../pages/admin/inventario/proveedores/Proveedor.vue'),
      },  
      {
        name: 'empleado',
        path: 'empleado',
        meta: { requiresAuth: true },// Marcar la ruta como protegida
        component: () => import('../pages/admin/usuarios/empleados/Empleado.vue'),
      },     
      {
        name: 'innerchangepassword',
        path: 'innerchangepassword',
        meta: { requiresAuth: true }, // Marcar la ruta como protegida
        component: () => import('../pages/admin/user/ChangePassword.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Intercepta la navegación antes de que se cargue cada ruta
router.beforeEach((to, from, next) => {
  const user = getUserFromLocalStorage(); // Obtiene el usuario desde el almacenamiento local
  console.log(to.meta.requiresAuth)
  console.log(user)
  console.log(!user)
  console.log(to.name )
  next();
/*
    if (to.meta.requiresAuth && !user) {
      // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al login
      next({ name: 'login' });
    } else {
      // De lo contrario, permite la navegación
      next();
    }
    */
});

function getUserFromLocalStorage(){
  //console.log(localStorage.getItem('store'))
  return localStorage.getItem('store');
}

export default router
