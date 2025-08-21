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
      path: '/services/self-drive',
      name: 'self-drive',
      component: () => import('../components/service/SelfDriveService.vue')
    },
    {
      path: '/services/driver-service',
      name: 'driver-service',
      component: () => import('../components/service/DriverService.vue')
    },
    {
      path: '/services/long-term',
      name: 'long-term',
      component: () => import('../components/service/LongTermRental.vue')
    },
    {
      path: '/services/airport-transfer',
      name: 'airport-transfer',
      component: () => import('../components/service/AirportTransfer.vue')
    },
    {
      path: '/services/safari-car',
      name: 'safari-car',
      component: () => import('../components/service/SafariCarRental.vue')
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
      component: () => import('../components/rwanda/AboutRwanda.vue')
    },
    {
      path: '/about-rwanda/national-parks',
      name: 'national-parks',
      component: () => import('../components/rwanda/NationalParks.vue')
    },
    {
      path: '/about-rwanda/culture-heritage',
      name: 'culture-heritage',
      component: () => import('../components/rwanda/CultureHeritage.vue')
    },
    {
      path: '/about-rwanda/cities-towns',
      name: 'cities-towns',
      component: () => import('../components/rwanda/CitiesTowns.vue')
    },
    {
      path: '/about-rwanda/climate-best-time',
      name: 'climate-best-time',
      component: () => import('../components/rwanda/ClimateBestTime.vue')
    },
    {
      path: '/about-rwanda/getting-around',
      name: 'getting-around',
      component: () => import('../components/rwanda/GettingAround.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
