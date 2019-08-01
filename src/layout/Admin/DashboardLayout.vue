<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Sale Thailand"
      title="Sale Thailand"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Ads Management', icon: 'ni ni-planet text-blue', path: '#', childrens: [{name:'Category Templates',path:'/admin/adsmanagement/categorytemplates'},{name:'Categories',path:'/admin/adsmanagement/categories'}, {name:'Ads Add',path:'/admin/adsmanagement/adsadd'}]}"/>
        <sidebar-item :link="{name: 'User Management', icon: 'ni ni-pin-3 text-orange', path: '/admin/usermanagement'}"/>
        <sidebar-item :link="{name: 'Payment Management', icon: 'ni ni-single-02 text-yellow', path: '/admin/paymentmanagement'}"/>
        <sidebar-item :link="{name: 'Page Management', icon: 'ni ni-bullet-list-67 text-red', path: '/admin/pagemanagement'}"/>
        <sidebar-item :link="{name: 'Reviews Management', icon: 'ni ni-key-25 text-info', path: '/admin/reviewsmanagement'}"/>
        <sidebar-item :link="{name: 'Site Management', icon: 'ni ni-circle-08 text-pink', path: '/admin/sitemanagement'}"/>
        <sidebar-item :link="{name: 'Plugins Management', icon: 'ni ni-circle-08 text-pink', path: '/admin/pluginsmanagement'}"/>
        <sidebar-item :link="{name: 'Clear Cache', icon: 'ni ni-circle-08 text-pink', path: '/admin/clearcache'}"/>
        <sidebar-item :link="{name: 'Maintenance', icon: 'ni ni-circle-08 text-pink', path: '/admin/maintenance'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <!-- <dashboard-navbar></dashboard-navbar> -->

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
