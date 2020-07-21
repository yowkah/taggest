<template>
  <div id="app">
    <div class="flex space-between header">
      <span class="h3">Find exactly what you need.</span>
      <div>
        <button class="upload">
        <!-- eslint-disable max-len -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/></svg>
        </button>
      </div>
    </div>
    <div><searchbar v-model="searchValue"/></div>
    <div id="filteringCluster">
      <taglist class="whitelist"></taglist>
      <taglist class="blacklist"></taglist>
      <div class="advanced"></div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import TagList from './components/TagList.vue';

export default {
  created() {
    this.$store.dispatch('getTags');
  },
  data() {
    return {
      searchValue: '',
    };
  },
  components: {
    searchbar: SearchBar,
    taglist: TagList,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Sk-Modernist';
  src: url('./assets/Sk-Modernist-Regular.otf') format('opentype')
}

html, body {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  background: #242a42 $background-gradient 0% 0% no-repeat padding-box;
  background-size: 45vw 45w;
  min-height: 100%;
  display: flex;
  justify-content: center;
}

.upload {
  svg {
    width: 25px;
    height: 25px;
    color: $text-primary;
  }
  background-color: #323b5b;
  border: none;
  border-radius: 20px;
  padding: calc(75px/2)
}

#app {
  width: 1440px;
  padding-top: 170px;
}

.flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.header {
  padding-bottom: 60px;
}

.whitelist {
  background-color: $context-primary-lighter;
}

#filteringCluster {
  display: flex;
  flex-direction: row;
  margin: 50px 0 0 0;
}
</style>
