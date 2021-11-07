<template>
  <header class="header">
    <div class="header-logo">
      <router-link to="/home">
        <Logo />
      </router-link>
    </div>
    <div class="header-navigation">
      <Navbar />
    </div>
  </header>
</template>

<script>
import Navbar from '../navbar/Navbar.vue';
import Logo from '../logo/Logo.vue';
export default {
  name: 'Header',
  components: { Navbar, Logo },
};
</script>

<style lang="scss">
.header {
  @media screen and (max-width: 1024px) {
    padding: 35px 25px;
  }
  display: flex;
  align-items: center;
  padding: 35px 100px;
  max-height: 120px;
  height: 100%;
  position: relative;
  &-logo {
    > a {
      display: flex;
    }
  }
  &-navigation {
    flex: auto;
    margin-left: 35px;
  }
}
</style>
