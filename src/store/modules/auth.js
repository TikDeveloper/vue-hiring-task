const state = () => ({
  isLoggedIn: false,
  data: null,
});

const mutations = {
  SET_USER: (state, payload) => {
    state.isLoggedIn = true;
    state.data = payload
  },
  REMOVE_USER: (state) => {
    state.isLoggedIn = false;
    state.data = null
  }
};

const actions = {
  loginUser: ({ commit }, payload) => {
    commit('SET_USER', payload);
  },
  logoutUser: ({ commit }) => {
    commit('REMOVE_USER');
  },
};
const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  getUserData: (state) => state.data,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
