import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ encodingType: 'aes',isCompression: false });




Vue.use(Vuex);

 
const authState = createPersistedState({
  paths: ['auth'],
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  }
})

const store = new Vuex.Store({
  modules: {
    auth
  },
  plugins: [authState],
  
});

export default store;
