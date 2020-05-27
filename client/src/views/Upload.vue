<template lang="pug">
  .upload
    h1 UPLOAD
    el-form(:model="form" ref="form" label-width="120px")
      el-upload(drag action="test" :auto-upload="false" ref="upload")
        i.el-icon-upload
        .el-upload__text Drop file here 
          em click to upload
        .el-upload__tip(slot="tip") Video files smaller then 1gb?
      el-form-item(label="title")
        el-input(v-model="form.title")
      el-form-item(label="description")
        el-input(type="textarea" v-model="form.description")
      el-button(@click="submitForm") submit
    
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      form: {
        title: "",
        description: "",
        tags: [],
        video: ''
      }
    };
  }, methods: {

    async submitForm(){
      try {
        console.log(this.$refs.upload.uploadFiles[0])
        const formData = new FormData();

        formData.append("video", this.$refs.upload.uploadFiles[0].raw)
        formData.append("title", this.form.title)
        formData.append("description", this.form.description)

        await fetch("api/video", {
          body: formData,
          method: "post"
        });

        console.log('success!!!');
      } catch(error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.upload {
  max-width: 400px;
  margin: 0 auto;
}
</style>
