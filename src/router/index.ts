import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayoutView from '../views/AppLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: AppLayoutView,
    children : [
      {
        path: '', // default child route (for "/")
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'reviews',
        name: 'reviews',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ReviewsView.vue')
      },
      {
        path: 'booking',
        name: 'booking',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/BookingView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home' // catch-all for unknown routes
  }
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
      
    // 👈 only scroll to hash when NOT going backward
    if (to.hash) {
      return {
        el: to.hash,
        top: 76.5,
        behavior: 'smooth'
      }
    }
   // 👈 if savedPosition exists, it's a back/forward navigation
   if (savedPosition) {
    // savedPosition.behavior = 'auto'
    return savedPosition
  }
    // Default behavior
    return { top: 0  }
  }
})


export default router
