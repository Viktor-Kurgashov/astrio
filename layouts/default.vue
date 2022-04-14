<template>
  <div class="app">
    <header class="app__header">
      <div class="app__header-body">
        <Nuxt-Link to="/" class="app__logo-link"></Nuxt-Link>

        <Nuxt-Link to="/cart" class="app__cart-link">
          <p>{{ $store.state.cart.items.length }}</p>
        </Nuxt-Link>
      </div>
    </header>

    <main class="app__main">
      <Nuxt />
    </main>
  </div>
</template>



<style>
  .app {
    min-width: 320px;
    min-height: 100vh;
    padding: 100px 5% 250px;
  }

  .app__header {
    border-bottom: 1px solid lightgrey;
    background: white;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 75px;
    padding: 0 5%;
  }

  .app__header-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  }

  .app__logo-link {
    background: url('~/assets/logo.png') no-repeat left center;
    background-size: auto 25px;
    width: 125px;
    height: 40px;
  }

  .app__cart-link {
    background: url('~/assets/icons/cart.svg') no-repeat center;
    background-size: 30px;
    width: 40px;
    height: 40px;
    position: relative;
  }

  .app__cart-link > p {
    color: white;
    border-radius: 50%;
    background: orangered;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
    width: 18px;
    height: 18px;
    position: absolute;
    right: -2px;
    top: -4px;
  }

  .app__main {
    max-width: 360px;
    margin: 0 auto;
  }



  @media screen and (min-width: 641px) {
    .app {
      padding-top: 120px;
    }

    .app__header {
      height: 90px;
    }

    .app__logo-link {
      background-size: auto 30px;
      width: 150px;
      height: 50px;
    }

    .app__cart-link {
      background-size: 35px;
      width: 50px;
      height: 50px;
    }

    .app__cart-link > p {
      font-size: 16px;
      line-height: 22px;
      width: 20px;
      height: 20px;
      right: 0;
    }

    .app__main {
      max-width: 720px;
    }
  }



  @media screen and (min-width: 961px) {
    .app__main {
      max-width: 1200px;
    }
  }
</style>