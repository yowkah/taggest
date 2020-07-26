<template>
  <div class="taglist" @keyup.escape="inputVisible=false">
    <h4 slot="title">I'm looking for...</h4>
    <div class="searchTags">
      <input v-if="inputVisible" v-model="searchValue" ref="input" placeholder="search here..." tabindex="1"/>
      <div v-else class="placeholder"></div>
      <button @click="toggleInput()" :class="{clicked: inputVisible}">
      <!-- eslint-disable max-len -->
        <svg
          class="svg-inline--fa fa-plus fa-w-14"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          />
        </svg>
      </button>
    </div>
    <div class="suggestion-wrapper" :class="{inputVisible: inputVisible}">
      <div class="suggestions" v-if="inputVisible">
        <ul>
          <li v-for="tag in suggestions" :key="tag" tabindex="1">
            {{ tag }}
            <svg
              class="svg-inline--fa fa-plus fa-w-14"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVisible: false,
      searchValue: '',
    };
  },
  props: {
    selectedTags: [],
    possibleTags: {
      type: Array,
      default: () => (['cat', 'dog', 'horse', 'elephant', 'mouse', 'rabbit']),
    },
  },
  methods: {
    toggleInput() {
      this.inputVisible = !this.inputVisible;
      if (this.inputVisible) {
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      }
    },
  },
  computed: {
    suggestions() {
      return this.possibleTags.filter(
        (tag) => tag.includes(this.searchValue),
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.taglist {
  padding: 36px 30px 0 54px;
  border-radius: 12px;
}

.searchTags {
  display: flex;

  .placeholder {
    margin: 0;
    padding: 0;
    width: 200px;
  }

  input {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: transparent;
    font-size: 1.1em;
    border: none;
    outline: none;
    color: lighten($context-primary, 40);
    &::placeholder {
      color: lighten($context-primary-lighter, 20);
    }
  }

  button {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 50%;
    display: block;
    height: 45px;
    width: 45px;
    outline: 0;
    margin-right: 25px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover, &:focus {
      background-color: rgba(0, 0, 0, 0.4);
    }

    svg {
      color: white;
      height: 1.1rem;
      width: 1.1rem;
      transition: transform 0.3s;
    }

    &.clicked svg {
      transform: rotate(-45deg);
    }

    div {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      color: white;
      font-size: 2em;
      line-height: 0;
      height: 2em;
      width: 2em;
    }
  }
}

.suggestion-wrapper{
  margin-top: 20px;
  height: 0;
  overflow-y: auto;
  transition: height 0.5s;

  &.inputVisible{
    height: 10vh;
  }

  &::-webkit-scrollbar
  {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: $neon-primary;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: $text-primary;

    &:hover, &:focus-within {
      color: lighten($context-primary-lighter, 20);

      li {
        transition: color 0.1s;

        &:hover, &:focus{
          color: $text-primary;
        }
      }

    }

    li {
      font-size: 1.1em;
      margin: 10px 0;
      outline: none;

      svg {
        float: right;
        width: 1.1rem;
        height: 1.1rem;
        margin-right: 35px;
      }
    }
  }
}

h4{
  color: $text-primary;
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
}
</style>
