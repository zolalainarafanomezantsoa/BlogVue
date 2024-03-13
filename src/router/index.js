import {
    createRouter,
    createWebHistory,
  } from 'vue-router';
  
  import BlogSView from '@/views/BlogSView.vue';
  import BlogView from '@/views/BlogView.vue';
  
  import AboutView from '../views/AboutView.vue';
  import HomeView from '../views/HomeView.vue';
  
  const router = createRouter({
      history : createWebHistory(),
      routes : [
          {
              name : 'home',
              path : '/',
              component : HomeView
          },
          {
              name : 'about',
              path : '/about',
              component : AboutView
          },
          {
              name : 'blog',
              path : '/blog',
              component : BlogView
          },
          {
              name : 'blogS',
              path : '/blog/:slugkely/:id',
              component : BlogSView
          }
      ]
  })
  export default router; 