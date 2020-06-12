import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tags: [],
  },
  mutations: {
    ADD_TAG({ tags }, tag) {
      tags.push(tag);
    },
  },
  actions: {
    getTags({ commit }) {
      fetch('/api/video/tags')
        .then((data) => data.json())
        .then((tags) => commit('ADD_TAG', tags));
    },
    addTag({ commit, state }, tag) {
      if (state.tags.indexOf(tag) === -1) {
        commit('ADD_TAG', tag);
      }
    },
  },
  modules: {
  },
});
