<template>
  <div class="filter-wrapper">
    <button class="filter-wrapper__open-btn" @click="openModal">filters</button>

    <div class="filter-wrapper__blur" @click="closeModal" :class="{ 'filter-wrapper__blur_visible': opened }"></div>

    <div class="filter-wrapper__mount" :class="{ 'filter-wrapper__mount_visible': opened }">
      <FilterBrands class="filter-wrapper__list" :class="{ 'filter-wrapper__list_visible': moving }" />
    </div>
  </div>
</template>



<script>
export default {
  name: 'FilterWrapper',

  data () {
    return {
      opened: false,
      moving: false
    }
  },

  methods: {
    openModal () {
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
      document.body.style.overflowY = 'hidden';
      this.opened = true;
      setTimeout(() => this.moving = true);
    },

    closeModal () {
      this.opened = this.moving = false;
      document.body.style.paddingRight = document.body.style.overflowY = '';
    }
  }
}
</script>



<style>  
  @media screen and (max-width: 960px) {
    .filter-wrapper__open-btn {
      box-shadow: 0 0 3px 1px lightgray;
      border-radius: 2px;
      min-width: 100px;
      min-height: 40px;
      height: 100%;
      padding: 0 2em;
    }

    .filter-wrapper__blur,
    .filter-wrapper__mount {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      display: none;
    }
    
    .filter-wrapper__blur {
      background: rgba(0,0,0,0.5);
      height: 100vh;
      z-index: 20;
    }

    .filter-wrapper__mount {
      overflow-x: hidden;
      padding: 0 5%;
      z-index: 30;
      top: 100px;
    }

    .filter-wrapper__list {
      background: white;
      margin-left: 100%;
      width: 100%;
    }

    .filter-wrapper__blur_visible,
    .filter-wrapper__mount_visible {
      display: block;
    }

    .filter-wrapper__list_visible {
      transition: margin-left 0.4s;
      margin-left: 0;
    }
  }



  @media screen and (min-width: 961px) {
    .filter-wrapper__open-btn,
    .filter-wrapper__blur {
      display: none;
    }
  }
</style>