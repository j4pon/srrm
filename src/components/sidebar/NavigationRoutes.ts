export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'Dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'inventario',
      displayName: 'Inventario',
      meta: {
        icon: 'material-icons-store',
      },
      children:[
        {
          name: 'proveedor',
          displayName: 'Proveedores',
          meta: {
            icon: 'vuestic-iconset-dashboard',
          },  
        },  
        {
          name: 'producto',
          displayName: 'Producto',
          meta: {
            icon: 'vuestic-iconset-dashboard',
          },  
        },   
        {
          name: 'valores',
          displayName: 'Valores',
          meta: {
            icon: 'vuestic-iconset-dashboard',
          },  
        }, 
        /*
        {
          name: 'compras',
          displayName: 'Compras',
          meta: {
            icon: 'vuestic-iconset-dashboard',
          },  
        },  
        */    
      ]
    },
    {
      name: 'usuarios',
      displayName: 'Usuarios',
      meta: {
        icon: 'material-icons-manage_accounts',
      },
      children:[
        {
          name: 'clientes',
          displayName: 'Clientes',
          meta: {
            icon: 'vuestic-iconset-dashboard',
          },  
        },
        {
          name: 'empleado',
          displayName: 'Empleado',
          meta: {
            icon: 'vuestic-iconset-dashboard',
          },  
        }         
      ]
    },
    {
      name: 'vehiculo',
      displayName: 'Vehiculo',
      meta: {
        icon: 'material-icons-local_taxi',
      },
    },
    {
      name: 'cotizacion',
      displayName: 'Cotizacion',
      meta: {
        icon: 'material-icons-rate_review',
      },
    },
    {
      name: 'servicio',
      displayName: 'Servicio',
      meta: {
        icon: 'material-icons-settings',
      },
    },

  ] as INavigationRoute[],
}
