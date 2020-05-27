<template lang="pug">
  .home
    img(alt="Vue logo" src="../assets/logo.png")
    videoList
</template>

<script>
// @ is an alias to /src
import VideoList from '@/components/VideoList.vue';

export default {
  name: 'Home',
  components: {
    VideoList,
  },
};
</script>
