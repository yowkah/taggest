<template>
  <el-select
    filterable
    :loading="loading"
    v-model="selectedTags"
    multiple
    placeholder="Please enter a keyword"
  >
    <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'TagList',
  data() {
    return {
      loading: false
    };
  },
  props: {
    isWhitelist: Boolean
  },
  computed: {
    options() {
      return this.$store.state.tags;
    },
    selectedTags: {
      get() {
        const list = this.isWhitelist ? 'whitelist' : 'blacklist';
        return this.$store.state[list];
      },
      set(tags) {
        const list = this.isWhitelist ? 'WHITELIST' : 'BLACKLIST';
        this.$store.commit('SET_' + list, tags);
      }
    }
  }
};
</script>

<style>
</style>