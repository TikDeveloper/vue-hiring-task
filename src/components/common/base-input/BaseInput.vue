<template>
  <div class="input-wrapper">
    <div>
      <label><slot></slot></label>
      <input
        class="input"
        :type="type"
        :placeholder="placeholder"
        v-model.trim="model.$model"
        :class="inpStatus(model)"
      />
    </div>

    <p class="inValid-text" v-if="model.$dirty && !model.required">
      Required Field.
    </p>
    <p class="inValid-text" v-if="model.$dirty && !model.minLength">
      Name must have at least {{ model.$params.minLength.min }} letters.
    </p>
  </div>
</template>

<script>
export default {
  name: 'baseInput',

  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    model: {
      type: Object,
      required: true,
    },
  },

  methods: {
    inpStatus(validation) {
      return {
        valid: validation.$dirty,
        inValid: validation.$error,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  > div {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .input {
    border: 1px solid var(--gray-violet);
    border-radius: 5px;
    padding: 10px 15px;
    &.valid {
      border-color: var(--green);
      background: #efe;
    }
    &.inValid {
      border-color: var(--red);
      background: #fdd;
    }
  }
  .inValid-text {
    position: absolute;
    left: 0;
    color: var(--red);
    font-size: 12px;
    margin-top: 3px;
  }
}
</style>
