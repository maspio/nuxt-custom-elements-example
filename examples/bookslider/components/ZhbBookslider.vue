<template>
  <div class="bookslider">
    <nav class="navigation">
      <ul>
        <li v-for="link in links" :key="link.title">
          <router-link :to="link.to" :title="link.title">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <div>
        <transition name="router-view-change">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
    <div v-if="config.debug" class="content">
      <h3>Config</h3>
      <div><span>debug={{ config.debug }}</span></div>
      <div><span>viewSelector={{ config.viewSelector }}</span></div>
      <div><span>filterSelector={{ config.filterSelector }}</span></div>
      <div><span>viewPre={{ config.viewPre }}</span></div>
      <div><span>height={{ config.height }}</span></div>
      <div><span>breakpoints={{ config.breakpoints }}</span></div>
    </div>
  </div>
</template>

<script>

import ViewIndex from '@/router-views/index.vue';
import View1 from '@/router-views/view-1.vue';
import View2 from '@/router-views/view-2.vue';
import View3 from '@/router-views/view-3.vue';
import { createRouter } from '../plugins/vueRouter';

const routes = [
  {
    title: '👩‍💻',
    path: '/',
    component: ViewIndex
  },
  {
    title: 'Neu',
    path: '/view-1',
    component: View1
  },
  {
    title: 'Musik in der Literatur',
    path: '/view-2',
    component: View2
  },
  {
    title: 'Brandstifter im Weissen Haus',
    path: '/view-3',
    component: View3
  }
];

export default {
  router: createRouter(routes),
  props: {
    title: {
      type: String,
      default: null
    },
    debug: {
      type: Boolean,
      default: null
    },
    viewSelector: {
      type: Boolean,
      default: null
    },
    filterSelector: {
      type: Boolean,
      default: null
    },
    viewPre: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    breakpoints: {
      type: Number,
      default: null
    }
  },
  computed: {
    config() {
      return {
        debug: this.debug || false,
        viewSelector: this.viewSelector || true,
        filterSelector: this.filterSelector || true,
        viewPre: this.viewPre || '123',
        height: this.height || 400,
        breakpoints: this.breakpoints || '{s:500px,m:800px,l:1000px}'
      }
    },
    links () {
      return this.$router.options.routes.map((route) => {
        return {
          title: routes.find(({ path }) => route.path === path).title,
          to: route
        };
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.bookslider {
  position: relative;
  padding: 10px;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 14px;
  color: #35495e;
  text-align: center;
  background: #35495e;
  border-radius: 4px;
}

nav {
  display: flex;
  padding: 5px 10px;
  margin-bottom: 10px;
  color: #fff;
  background: #3b8070;
}

nav > span {
  padding-right: 10px;
}

ul {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}

ul li {
  padding: 0 10px;
}

a {
  display: block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
}

.nuxt-link-exact-active.nuxt-link-active,
.router-link-exact-active.router-link-active {
  font-weight: bold;
}

.content {
  padding: 5px;
  overflow: hidden;
  line-height: 1.6;
  color: #35495e;
  background: #fff;
}

.content > div {
  position: relative;
  overflow: hidden;
}

.content >>> h2 {
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.router-view-change-enter-active,
.router-view-change-leave-active {
  transition: opacity 0s 0.15s linear;
}

.router-view-change-enter,
.router-view-change-leave-to {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 0.15s 0.15s linear;
}
</style>
