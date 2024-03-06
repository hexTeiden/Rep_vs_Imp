const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/republik',
    component: () => import('layouts/RepublikLayout.vue'),
    children: [{ path: '', component: () => import('pages/Republik.vue') }],
  },
  {
    path: '/imperium,',
    component: () => import('layouts/ImperiumLayout.vue'),
    children: [{ path: '', component: () => import('pages/ImperiumPage.vue') }],
  },
  {
    path: '/contact',
    component: () => import('pages/ContactLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  {
    path: '/about',
    component: () => import('pages/AboutLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
