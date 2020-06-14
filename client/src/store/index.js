import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tags: [],
    whitelist: [],
    blacklist: [],
  },
  mutations: {
    ADD_TAG({ tags }, tag) {
      tags.push(tag);
    },
    ADD_TAGS_IF_MISSING({ tags }, tagList) {
      const missingTags = tagList.filter((tag) => !tags.includes(tag));
      missingTags.forEach((tag) => tags.push(tag));
    },
    SET_WHITELIST(state, tags) {
      Vue.set(state, 'whitelist', tags);
    },
    SET_BLACKLIST(state, tags) {
      Vue.set(state, 'blacklist', tags);
    },
  },
  actions: {
    getTags({ commit }) {
      fetch('/api/video/tags')
        .then((data) => data.json())
        .then((tags) => {
          tags.forEach((tag) => commit('ADD_TAG', tag));
        });
    },
  },
  modules: {},
});
