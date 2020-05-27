<template lang="pug">
  .upload
    h1 UPLOAD
    el-form(:model="form" ref="form" label-width="120px")
      el-upload(drag action="https://jsonplaceholder.typicode.com/posts/")
        i.el-icon-upload
        .el-upload__text Drop file here 
          em click to upload
        .el-upload__tip(slot="tip") Video files smaller then 1gb?
      el-form-item(label="title")
        el-input(v-model="form.title")
      el-form-item(label="description")
        el-input(type="textarea" v-model="form.description")
    //- form(action="/api/upload" method="POST")
      //- input#file(type="file" name="file")
      //- br
      //- input#fileTitle(name="title")
      //- br
      //- button#submit upload!
    
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
        video: {}
      }
    };
  }
};
</script>

<style scoped lang="scss">
.upload {
  max-width: 400px;
  margin: 0 auto;
}
</style>
