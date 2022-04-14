import products from '~/assets/data/products.json'
import brands from '~/assets/data/brands.json'

export const state = () => ({
  brands: brands.map(item => {
    item.selected = true;
    return item;
  })
})

export const mutations = {
  addBrand (state, id) {
    state.brands[state.brands.findIndex(item => item.id == id)].selected = true;
  },

  removeBrand (state, id) {
    state.brands[state.brands.findIndex(item => item.id == id)].selected = false;
  }
}

export const getters = {
  getResult (state) {
    return products.filter(pr => state.brands.find(br => (br.id == pr.brand) && br.selected));
  }
}