import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [{ path: '', component: () => import('pages/loginpage.vue') }]
  },
  
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [{ path: 'regis', component: () => import('pages/regis.vue') },
    { path: 'login', component: () => import('pages/loginpage.vue') }
  ]
  },
  
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'utama', component: () => import('pages/index.vue') },
    { path: 'Input', component: () => import('pages/Input.vue') },
    { path: 'stok', component: () => import('pages/stok.vue') },
    { path: 'pengiriman', component: () => import('pages/pengiriman.vue') },
    { path: 'transaksi', component: () => import('pages/transaksi.vue') }
  ]
  },
  
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
