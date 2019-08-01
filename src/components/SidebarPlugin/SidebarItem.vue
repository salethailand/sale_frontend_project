<template>
    <li class="nav-item">
        <router-link
                :to="link.path"
                @click.native="linkClick"
                class="nav-link"
                :target="link.target"
                :href="link.path">
            <template>
                <i :class="link.icon"></i>
                <span class="nav-link-text">{{ link.name }}</span>
            </template>
        </router-link>
        <div v-for="children in link.childrens" :key="children.name">
          <router-link
                :to="children.path"
                @click.native="linkClick"
                class="nav-link"
                :target="link.target"
                :href="children.path">
            <template>
                <span class="nav-link-text">{{ children.name }}</span>
            </template>
          </router-link>
        </div>
    </li>
</template>
<script>
  export default {
    name: 'sidebar-item',
    props: {
      link: {
        type: Object,
        default: () => {
          return {
            name: '',
            path: '',
            childrens: []
          };
        },
        description:
          'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
      }
    },
    inject: {
      autoClose: {
        default: true
      }
    },
    data() {
      return {
        childrens: [],
        collapsed: true
      };
    },
    methods: {
      linkClick() {
        if (
          this.autoClose &&
          this.$sidebar &&
          this.$sidebar.showSidebar === true
        ) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
