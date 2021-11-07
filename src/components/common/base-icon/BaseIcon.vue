<template>
  <div class="icon-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      v-html="icons[name]"
      v-if="!sm"
    ></svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      v-html="icons[name]"
      v-if="sm"
    ></svg>
  </div>
</template>

<script>
import iconsData from '../../../assets/icons/icons.json';
export default {
  name: 'baseIcon',
  props: {
    name: {
      type: String,
      require: true,
    },
    sm: {
      type: Boolean,
      require: false,
    },
  },
  data: () => ({
    icons: iconsData,
  }),
};
</script>

<style lang="scss">
.icon-wrapper {
  display: flex;
  > svg {
    cursor: pointer;
  }
}
</style>
