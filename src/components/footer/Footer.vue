<template>
  <footer class="footer layer-100">
    <div class="footer-logo">
      <Logo variant="white" />
    </div>
    <div class="footer-info">
      <div class="footer-info-column">
        <h4 class="st-h4">Resourses</h4>
        <ul>
          <li>aaaaaaaaaa</li>
          <li>aaaaaaaaaa</li>
          <li>aaaaaaaaaa</li>
        </ul>
      </div>
      <div class="footer-info-column">
        <h4 class="st-h4">Resourses</h4>
        <ul>
          <li>aaaaaaaaaa</li>
          <li>aaaaaaaaaa</li>
          <li>aaaaaaaaaa</li>
        </ul>
      </div>
      <div class="footer-info-column">
        <h4 class="st-h4">Resourses</h4>
        <ul>
          <li>aaaaaaaaaa</li>
          <li>aaaaaaaaaa</li>
          <li>aaaaaaaaaa</li>
        </ul>
      </div>
      <div class="footer-info-column footer-info-column-socials">
        <BaseIcon name="fb" sm />
        <BaseIcon name="twitter" sm />
        <BaseIcon name="pinteres" sm />
        <BaseIcon name="instagram" sm />
      </div>
    </div>
  </footer>
</template>

<script>
import { BaseIcon } from '../common';
import Logo from '../logo/Logo.vue';
import './Footer.scss';
export default {
  name: 'Footer',
  components: { Logo, BaseIcon },
};
</script>

<style lang="scss"></style>
