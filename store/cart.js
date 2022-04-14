export const state = () => ({
  items: [],
  subtotal: 0
});

export const mutations = {
  append (state, product) {
    if (state.items.findIndex(item => item.id == product.id) === -1) {
      product.quantity = 1;
      product.total = product.regular_price.value;
      state.items.push(product);
      state.subtotal = state.items.reduce((sum, item) => Math.round((sum + item.total) * 100) / 100, 0);
    }
  },

  add (state, id) {
    let item = state.items[state.items.findIndex(item => item.id == id)];
    item.total = Math.round(++item.quantity * item.regular_price.value * 100) / 100;
    state.subtotal = state.items.reduce((sum, item) => Math.round((sum + item.total) * 100) / 100, 0);
  },

  substract (state, id) {
    const index = state.items.findIndex(item => item.id == id);
    let item = state.items[index];
    if (item.quantity == 1) state.items.splice(index, 1);
    else item.total = Math.round(--item.quantity * item.regular_price.value * 100) / 100;
    state.subtotal = state.items.reduce((sum, item) => Math.round((sum + item.total) * 100) / 100, 0);
  },

  delete (state, id) {
    state.items.splice(state.items.findIndex(item => item.id == id), 1);
    state.subtotal = state.items.reduce((sum, item) => Math.round((sum + item.total) * 100) / 100, 0);
  },
};

export const getters = {
  getLength (state) {
    return state.cartItems.length;
  },
};