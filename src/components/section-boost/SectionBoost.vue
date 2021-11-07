<template>
  <section class="section-boost">
    <h2 class="st-h2">Boost your links today</h2>
    <button class="st-btn">get started</button>
  </section>
</template>

<script>
export default {
  name: 'SectionBoost',
};
</script>

<style lang="scss">
.section-boost {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  background-image: url('../../assets/images/bg-boost-desktop.svg');
  background-color: var(--dark-violet);
  background-repeat: no-repeat;
  background-size: cover;
  .st-h2 {
    color: white;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .st-btn {
    border-radius: 25px;
    padding: 15px 35px;
    font-size: 18px;
  }
}
@media screen and (max-width: 768px) {
  .section-boost {
    background-image: url('../../assets/images/bg-boost-mobile.svg');
    .st-h2 {
      margin-bottom: 35px;
    }
  }
}
</style>
