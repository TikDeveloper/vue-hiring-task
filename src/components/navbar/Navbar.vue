<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="(item, index) in navLinks" :key="index">
        <router-link :to="item.path"> {{ item.label }} </router-link>
      </li>
    </ul>
    <ul class="nav-auth-list">
      <li v-for="(item, index) in authLinks" :key="index">
        <router-link :to="item.path" :class="{ signUpBtn: index === 1 }">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
    <div class="nav-burger" @click="toggleNav" :class="{ open: isNavOpen }">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <div class="nav-dropdown" v-if="isNavOpen">
      <ul class="nav-dropdown-list">
        <li v-for="(item, index) in navLinks" :key="index">
          <router-link :to="item.path"> {{ item.label }} </router-link>
        </li>
      </ul>

      <ul class="nav-dropdown-auth-list">
        <li v-for="(item, index) in authLinks" :key="index">
          <router-link :to="item.path" :class="{ signUpBtn: index === 1 }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import './Navbar.scss';
export default {
  name: 'Navbar',
  data: () => ({
    navLinks: [
      {
        label: 'features',
        path: '/features',
      },
      {
        label: 'pricing',
        path: '/pricing',
      },
      {
        label: 'resourses',
        path: '/resourses',
      },
    ],
    authLinks: [
      {
        label: 'login',
        path: '/login',
      },
      {
        label: 'sign up',
        path: '/sign-up',
      },
    ],
    isNavOpen: false,
  }),
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
