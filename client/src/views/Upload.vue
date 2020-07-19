<template lang="pug">
  .upload
    h1 UPLOAD
    el-form(:model="form" ref='form' label-width='120px')
      el-upload(drag action='test' :auto-upload='false' ref='upload')
        i.el-icon-upload
        .el-upload__text Drop file here
          em click to upload
        .el-upload__tip(slot='tip') Video files smaller then 1gb?
      el-form-item(label='title')
        el-input(v-model='form.title')
      el-form-item(label='description')
        el-input(type='textarea' v-model='form.description')
      el-select(
        filterable
        v-model="form.tags"
        multiple
        allow-create
        placeholder="Please enter a keyword"
      )
        el-option(v-for="tag in tags" :key="tag" :label="tag" :value="tag")
      el-button(@click='submitForm') submit
</template>

<script>
import TagList from '@/components/TagList.vue';

export default {
  name: 'Upload',
  data() {
    return {
      form: {
        title: '',
        description: '',
        tags: [],
        video: '',
      },
    };
  },
  computed: {
    tags() {
      return this.$store.state.tags;
    },
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();

        formData.append('video', this.$refs.upload.uploadFiles[0].raw);
        formData.append('title', this.form.title);
        formData.append('description', this.form.description);
        formData.append('tags', this.form.tags);

        await fetch('api/video', {
          body: formData,
          method: 'post',
        });

        this.$store.commit('ADD_TAGS_IF_MISSING', this.form.tags);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
  },
  components: {
    TagList,
  },
};
</script>

<style scoped lang='scss'>
.upload {
  max-width: 400px;
  margin: 0 auto;
}
</style>
