import { createStore } from 'vuex';

export default createStore({
  state: {
    showAuthModal: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },
  },
  getters: {
    authModalShow: (state) => state.showAuthModal,
  },
  actions: {
  },
  modules: {
  },
});
