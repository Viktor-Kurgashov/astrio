<template>
  <div class="catalog">
    <h2 class="catalog__title">Catalog</h2>

    <FilterWrapper class="catalog__filters" />

    <ul class="catalog__list">
      <Product class="catalog__item" v-for="item of filterResult" :key="item.id" :product="item" />
    </ul>
  </div>
</template>



<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters({
      filterResult: 'filter/getResult'
    })
  },
}
</script>



<style>
  .catalog {
    display: grid;
    grid-template: "title filters" 40px "list list" auto / 1fr auto;
    align-items: center;
    grid-row-gap: 1.5em;
  }

  .catalog__filters {
    grid-area: filters;
  }

  .catalog__title {
    grid-area: title;
  }

  .catalog__list {
    display: flex;
    flex-direction: column;
    gap: 1.5em 0;
    grid-area: list;
  }



  @media screen and (min-width: 641px) {
    .catalog {
      grid-template-rows: 48px auto;
      grid-row-gap: 2em;
    }

    .catalog__list {
      flex-flow: row wrap;
      gap: 2em 5%;
    }

    .catalog__item {
      width: 47.5%;
    }
  }



  @media screen and (min-width: 961px) {
    .catalog {
      grid-template: "filters title" auto "filters list" 1fr / auto 1fr;
      grid-gap: 1em 2em;
      align-items: start;
    }

    .catalog__filters {
      border-right: 1px solid lightgrey;
      padding-right: 1.25em;
    }

    .catalog__item {
      width: 30%;
    }
  }
</style>