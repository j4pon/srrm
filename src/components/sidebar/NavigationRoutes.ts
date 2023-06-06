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
      name: 'fondos',
      displayName: 'Fondos',
      meta: {
        icon: 'vuestic-iconset-statistics',
      },
    },
    {
      name: 'movimientos',
      displayName: 'Movimientos',
      meta: {
        icon: 'vuestic-iconset-files',
      },
    },   
  ] as INavigationRoute[],
}
