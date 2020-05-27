<template lang="pug">
  .video-list
    ul
      li(v-for="video in videos" :key="video.title")
        video(:src="'/api/video/'+video.filename")
</template>

<script>
export default {
  name: 'VideoList',
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    fetch('/api/video/')
      .then(data => data.json())
      .then(videos => this.videos = videos)
  }
};
</script>
