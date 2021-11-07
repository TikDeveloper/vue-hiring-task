<template>
  <HomeLayout>
    <SectionTop />
    <SectionShorten/>
    <SectionStatistics/>
    <SectionBoost/>
  </HomeLayout>
</template>

<script>
import HomeLayout from '../components/layouts/home-layout/HomeLayout.vue';
import SectionBoost from '../components/section-boost/SectionBoost.vue';
import SectionShorten from '../components/section-shorten/SectionShorten.vue';
import SectionStatistics from '../components/section-statistics/SectionStatistics.vue';
import SectionTop from '../components/section-top/SectionTop.vue';
export default {
  name: 'homePage',
  components: { HomeLayout, SectionTop,SectionShorten, SectionStatistics, SectionBoost },
};
</script>

<style>