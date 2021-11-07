<template>
  <div class="st-card">
    <base-icon :name="data.icon" v-if="data.icon"></base-icon>
    <h3 class="st-h3">{{ data.title }}</h3>
    <p class="st-desc">{{ data.description }}</p>
  </div>
</template>

<script>
import BaseIcon from '../base-icon/BaseIcon.vue';
export default {
  name: 'baseCard',
  components: { BaseIcon },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.st-card {
  width: 350px;
  padding: 75px 25px 35px 25px;
  background: white;
  border-radius: 10px;
  position: relative;
  .icon-wrapper {
    position: absolute;
    top: -35px;
    left: 30px;
    padding: 20px;
    background: var(--dark-violet);
    border-radius: 50%;
  }
  .st-h3 {
    margin-bottom: 20px;
  }
}
</style>
