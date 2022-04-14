<template>
  <div class="cart">
    <h2 class="cart__title">Shopping cart</h2>

    <ul class="cart__list">
      <CartItem v-for="item of $store.state.cart.items" :key="item.id" :product="item" />
    </ul>

    <p class="cart__subtotal">Subtotal: {{ $store.state.cart.subtotal }}$</p>

    <Nuxt-Link class="cart__checkout-link" to="/">Checkout</Nuxt-Link>
  </div>
</template>



<script>
export default {
  name: 'CartPage',
}
</script>



<style>
  .cart {
    display: flex;
    flex-direction: column;
  }

  .cart__list {
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    margin: 2em 0 3em;
  }
  
  .cart__subtotal,
  .cart__checkout-link {
    font-size: 19px;
    align-self: flex-end;
  }

  .cart__subtotal {
    font-weight: 700;
    margin-bottom: 1em;
  }

  .cart__checkout-link {
    box-shadow: 0 0 3px 1px lightgray;
    border-radius: 2px;
    padding: 0.25em 1em;
  }



  @media screen and (min-width: 640px) {
    .cart__list {
      margin: 2.4em 0 3.6em;
      row-gap: 2.4em;
    }

    .cart__subtotal {
      margin-bottom: 1.2em;
      font-size: 22px;
    }

    .cart__checkout-link {
      font-size: 22px;
    }
  }
</style>