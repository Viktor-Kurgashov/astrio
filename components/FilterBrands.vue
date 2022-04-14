<template>
  <div class="filter-brands">
    <label class="brand">
      <input class="brand__removed-chbox" type="checkbox" name="brand" checked @change="toggleAllBrands">
      <div class="brand__custom-chbox"></div>
      <p class="brand__title">All brands</p>
    </label>

    <label v-for="item of $store.state.filter.brands" :key="item.code" class="brand">
      <input class="brand__removed-chbox" type="checkbox" name="brand" :value="item.id" :checked="item.selected" @change="toggleBrand">
      <div class="brand__custom-chbox"></div>
      <p class="brand__title">{{ item.title }}</p>
    </label>
  </div>
</template>



<script>
import { mapMutations } from 'vuex'

export default {
  name: 'FilterBrands',

  methods: {
    toggleAllBrands (e) {
      let coll = document.querySelectorAll('.brand:not(.brand:first-of-type)');

      if (e.currentTarget.checked) {
        for (let elem of coll) {
          if (!elem.firstElementChild.checked) elem.click();
        }
      }
      else {
        for (let elem of coll) {
          if (elem.firstElementChild.checked) elem.click();
        }
      }
    },
    
    toggleBrand (e) {
      if (e.currentTarget.checked) this.addBrand(+e.currentTarget.value);
      else this.removeBrand(+e.currentTarget.value);
    },

    ...mapMutations({
      addBrand: 'filter/addBrand',
      removeBrand: 'filter/removeBrand'
    })
  },
}
</script>



<style>
  .brand {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 12px;
    column-gap: 12px;
    cursor: pointer;
  }

  .brand__removed-chbox {
    display: none;
  }

  .brand__custom-chbox {
    border: 1px solid dimgrey;
    border-radius: 2px;
    width: 20px;
    height: 20px;
  }

  .brand__removed-chbox:checked + .brand__custom-chbox {
    background: orangered url('~/assets/icons/check.svg') no-repeat center;
    background-size: 75%;
    border-color: orangered;
  }



  @media screen and (min-width: 641px) {
    .brand {
      height: 52px;
      padding: 0 15px;
      column-gap: 15px;
      white-space: nowrap;
    }

    .brand__custom-chbox {
      width: 22px;
      height: 22px;
    }
  }
</style>