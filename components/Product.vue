<template>
  <li class="product">
    <img class="product__image" :src="product.image" alt="product image">

    <h3 class="product__title">{{ product.title }}</h3>

    <p class="product__brand">brand {{ product.brand }}</p>

    <p class="product__price">${{ product.regular_price.value }}</p>

    <button class="product__add-btn" @click="() => append(product)"></button>
  </li>
</template>



<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Product',

  props: {
    product: Object
  },

  methods: {
    ...mapMutations({
      append: 'cart/append'
    })
  },
}
</script>



<style>
  .product {
    border-bottom: 1px solid lightgrey;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.75em;
  }

  .product__image {
    align-self: stretch;
    width: 100%;
  }

  .product__add-btn {
    background: url('~/assets/icons/plus.svg') no-repeat center;
    background-size: 22px;
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 40px;
    height: 40px;
  }

  .product__add-btn:active {
    opacity: 0.2;
  }
</style>