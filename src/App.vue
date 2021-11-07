<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import './assets/scss/index.scss';

export default {
  name: 'app',
  metaInfo: {
    title: 'Vue Task',
    titleTemplate: '%s | My Awesome Webapp',
  },
  mounted() {
    window.addEventListener('storage', this.handleStorage);
  },
  unmounted() {
    window.removeEventListener('storage', this.handleStorage);
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    handleStorage() {
      // this.logoutUser().then(() => this.$router.replace({ name: 'login' }));
    },
  },
};
</script>

<style></style>
