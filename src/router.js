import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import VehicleCar from "./views/VehicleCar.vue";
import VehicleMotor from "./views/VehicleMotor.vue";
import Vehicle from "./views/Vehicle.vue";
import RealEstate from "./views/RealEstate.vue";
import AdsInsight from "./views/AdsInsight.vue";
import NewAdWizard from "./views/NewAdWizard.vue";
import Job from "./views/Job.vue";
import UserProfile from "./views/UserProfile.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Package from "./views/Package.vue";
import DashboardLayout from '@/layout/Admin/DashboardLayout'
// import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/admin",
      redirect: 'dashboard',
      components: {
        default: DashboardLayout
      },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Dashboard.vue')
        },
        {
          path: '/admin/adsmanagement/categorytemplates',
          name: 'categorytemplates',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Adsmangement/CategoryTemplates.vue')
        },
        {
          path: '/admin/adsmanagement/categories',
          name: 'categories',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Adsmangement/Category.vue')
        },
        {
          path: '/admin/adsmanagement/adsadd',
          name: 'adsadd',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Adsmangement/AdsAdd.vue')
        },
        {
          path: '/admin/usermanagement',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/User.vue')
        },
        {
          path: '/admin/paymentmanagement',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Payment.vue')
        },
        {
          path: '/admin/pagemanagement',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Page.vue')
        },
        {
          path: '/admin/reviewsmanagement',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Reviews.vue')
        },
        {
          path: '/admin/sitemanagement',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Site.vue')
        },
        {
          path: '/admin/pluginsmanagement',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Plugins.vue')
        },
        {
          path: '/admin/clearcache',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Cache.vue')
        },
        {
          path: '/admin/maintenance',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Maintenance.vue')
        }
      ]

    },
    {
      path: "/Vehicle",
      name: "vehicle",
      components: {
        header: AppHeader,
        default: Vehicle,
        footer: AppFooter
      }
    },
    {
      path: "/VehicleCar",
      name: "vehiclecar",
      components: {
        header: AppHeader,
        default: VehicleCar,
        footer: AppFooter
      }
    },
    {
      path: "/AdsInsight",
      name: "adsinsight",
      components: {
        header: AppHeader,
        default: AdsInsight,
        footer: AppFooter
      }
    },
    {
      path: "/NewAdWizard",
      name: "newadwizard",
      components: {
        header: AppHeader,
        default: NewAdWizard,
        footer: AppFooter
      }
    },
    {
      path: "/Login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/SignUp",
      name: "signup",
      components: {
        header: AppHeader,
        default: SignUp,
        footer: AppFooter
      }
    },
    {
      path: "/Package",
      name: "package",
      components: {
        header: AppHeader,
        default: Package,
        footer: AppFooter
      }
    },
    {
      path: "/VehicleMotor",
      name: "vehiclemotor",
      components: {
        header: AppHeader,
        default: VehicleMotor,
        footer: AppFooter
      }
    },
    {
      path: "/RealEstate",
      name: "realestate",
      components: {
        header: AppHeader,
        default: RealEstate,
        footer: AppFooter
      }
    },
    {
      path: "/Job",
      name: "job",
      components: {
        header: AppHeader,
        default: Job,
        footer: AppFooter
      }
    },
    {
      path: "/UserProfile",
      name: "userprofile",
      components: {
        header: AppHeader,
        default: UserProfile,
        footer: AppFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
