<template>
  <li class="cart-item">
    <img class="cart-item__image" :src="product.image" alt="product image">

    <h3 class="cart-item__title">{{ product.title }}</h3>

    <p class="cart-item__brand">brand {{ product.brand }}</p>

    <button class="cart-item__delete-btn" @click="() => deleteItem(product.id)"></button>

    <div class="cart-item__controls">
      <p class="cart-item__price">{{ product.regular_price.value }}</p>

      <button class="cart-item__add-btn" @click="() => addOne(product.id)"></button>

      <p class="cart-item__quantity">{{ product.quantity }}</p>

      <button class="cart-item__substract-btn" @click="() => substractOne(product.id)"></button>

      <p class="cart-item__total">{{ product.total }}</p>
    </div>
  </li>
</template>



<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CartItem',

  props: {
    product: Object
  },

  methods: {
    ...mapMutations({
      addOne: 'cart/add',
      substractOne: 'cart/substract',
      deleteItem: 'cart/delete',
    })
  },
}
</script>



<style>
  .cart-item {
    display: grid;
    grid-template:
      "image title delete-btn" auto
      "image brand delete-btn" auto
      "controls controls controls"
      / auto 1fr auto;
    column-gap: 12px;
    border-bottom: 1px solid lightgrey;
  }

  .cart-item__image {
    grid-area: image;
    width: 80px;
    height: 80px;
  }

  .cart-item__title {
    grid-area: title;
  }

  .cart-item__brand {
    grid-area: brand;
  }

  .cart-item__delete-btn,
  .cart-item__add-btn,
  .cart-item__substract-btn {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    width: 30px;
    height: 30px;
  }

  .cart-item__delete-btn {
    grid-area: delete-btn;
    background-image: url('~/assets/icons/delete.svg');
    background-size: 16px;
  }

  .cart-item__controls {
    grid-area: controls;
    place-self: center;
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .cart-item__quantity {
    font-size: 20px;
    margin: 0 10px;
  }

  .cart-item__add-btn {
    background-image: url('~/assets/icons/plus.svg');
    margin-left: 30px;
  }

  .cart-item__substract-btn {
    background-image: url('~/assets/icons/minus.svg');
    margin-right: 30px;
  }



  @media screen and (min-width: 641px) {
    .cart-item {
      grid-template:
        "image title controls delete-btn" auto
        "image brand controls delete-btn" auto
        / auto 1fr auto auto;
      grid-column-gap: 18px;
      padding-bottom: 15px;
    }

    .cart-item__image {
      width: 100px;
      height: 100px;
    }

    .cart-item__delete-btn,
    .cart-item__add-btn,
    .cart-item__substract-btn {
      width: 35px;
      height: 35px;
    }

    .cart-item__delete-btn {
      background-size: 18px;
      align-self: center;
    }

    .cart-item__add-btn,
    .cart-item__substract-btn {
      background-size: 22px;
    }

    .cart-item__quantity {
      font-size: 22px;
    }
  }
</style>