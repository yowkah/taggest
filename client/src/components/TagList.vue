<template>
  <div class="taglist">
    <h4 slot="title">I'm looking for...</h4>
    <div class="searchTags">
      <input />
      <button>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.taglist {
  padding: 20px;
}

.searchTags {
  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: lighten($context-primary, 40);
  }

  button {
    background-color: $context-primary;
    border: none;
    border-radius: 50%;
    display: block;
    height: 50px;
    width: 50px;

    svg {
      color: white;
      height: 15px;
      width: 15px;
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

h4 {
  color: lighten($context-primary, 40);
  margin: 0;
}
</style>
