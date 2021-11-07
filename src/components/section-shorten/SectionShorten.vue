<template>
  <section class="section-shorten">
    <div class="section-shorten-content layer-100">
      <form @submit.prevent="submitForm">
        <base-input
          type="text"
          :model="$v.shortenLink"
          placeholder="Shorten link here..."
        ></base-input>
        <button class="st-btn" type="submit">Shorten it!</button>
      </form>
    </div>
  </section>
</template>

<script>
import { BaseInput } from '../common';
import { required, minLength } from 'vuelidate/lib/validators';
import './SectionShorten.scss';
export default {
  name: 'SectionShorten',
  components: { BaseInput },
  validations: {
    shortenLink: {
      required,
      minLength: minLength(4),
    },
  },
  data: () => ({
    shortenLink: '',
  }),
  methods: {
    submitForm() {
      console.log('a');
    },
  },
};
</script>

<style lang="scss"></style>
