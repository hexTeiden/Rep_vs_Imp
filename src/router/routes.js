const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/republik',
    children: [{ path: '', component: () => import('pages/Republik.vue') }],
  },
  {
    path: '/imperium,',
    children: [{ path: '', component: () => import('pages/ImperiumPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
