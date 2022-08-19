import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/home',
    name: 'home2',
    component: () => import('@/views/Home'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search'),
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/Community'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});