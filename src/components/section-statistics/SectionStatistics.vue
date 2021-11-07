<template>
  <section class="section-statistics layer-100">
    <div class="section-statistics-header">
      <h2 class="st-h2">Advanced Statistics</h2>
      <p class="st-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sunt
        perferendis odit illum fugit cum ipsa repellendus quos facilis
        aspernatur eius, accusamus libero, praesentium laudantium blanditiis
        fugiat facere rerum!
      </p>
    </div>
    <div class="section-statistics-cards">
      <base-card
        v-for="(item, index) in cards"
        :key="index"
        :data="item"
      ></base-card>
    </div>
  </section>
</template>

<script>
import { BaseCard } from '../common/';
import './SectionStatistics.scss';
export default {
  name: 'SectionStatistics',
  components: { BaseCard },
  data: () => ({
    cards: [
      {
        title: 'Brand Recognition',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sunt perferendis odit illum fugit cum ipsa repellendus quos facilis aspernatur eius, accusamus libero, praesentium laudantium blanditiis fugiat facere rerum!',
        icon: 'icon1',
      },
      {
        title: 'Brand Recognition',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sunt perferendis odit illum fugit cum ipsa repellendus quos facilis aspernatur eius, accusamus libero, praesentium laudantium blanditiis fugiat facere rerum!',
        icon: 'icon2',
      },
      {
        title: 'Brand Recognition',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sunt perferendis odit illum fugit cum ipsa repellendus quos facilis aspernatur eius, accusamus libero, praesentium laudantium blanditiis fugiat facere rerum!',
        icon: 'icon3',
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
