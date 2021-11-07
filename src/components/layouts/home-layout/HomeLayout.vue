<template>
  <div class="home-layout">
    <div class="home-layout-container">
      <Header />
      <main class="home-layout-content">
        <slot></slot>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../../header/Header.vue';
import Footer from '../../footer/Footer.vue';

export default {
  name: 'HomeLayout',
  components: { Header, Footer },
};
</script>

<style lang="scss">
.home-layout {
  display: flex;
  justify-content: center;
  &-container {
    // @media screen and (max-width: 1024px) {
    //   padding: 0 25px;
    // }

    max-width: 1440px;
    width: 100%;
    min-height: 100vh;
    // display: flex;
    // flex-direction: column;
    // > main {
    //   flex: 1;
    // }
  }
}
</style>
