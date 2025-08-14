import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/CarsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../views/BookView.vue')
    },
    // New routes for enhanced content
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: () => import('../views/DestinationsView.vue')
    },
    {
      path: '/fleet',
      name: 'fleet',
      component: () => import('../views/FleetView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/about-rwanda',
      name: 'about-rwanda',
      component: () => import('../views/AboutRwandaView.vue')
    }
  ]
})

export default router
