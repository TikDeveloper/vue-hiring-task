<template>
  <div class="auth-layout">
    <div class="auth-layout-content">
      <h1>Please Enter Your Name</h1>
      <form @submit.prevent="submitForm">
        <base-input type="text" :model="$v.username"></base-input>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { BaseInput } from '../components/common';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'loginPage',
  components: { BaseInput },
  validations: {
    username: {
      required,
      minLength: minLength(4),
    },
  },
  data: () => ({
    username: '',
  }),

  methods: {
    ...mapGetters('auth', ['getUserData']),
    ...mapActions('auth', ['loginUser']),
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.loginUser({ name: this.username }).then(() => {
        if (this.username === 'admin') {
          this.$router.push({ name: 'dashboard' });
        } else {
          this.$router.push({ name: 'home' });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  &-content {
    text-align: center;
    > form {
      > button {
        padding: 15px 25px;
        margin-left: 15px;
        background-color: var(--cyan);
        margin-top: 25px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}
</style>
