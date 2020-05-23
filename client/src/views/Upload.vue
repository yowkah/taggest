<template lang="pug">
  .upload
    h1 UPLOAD
    form(action="/api/upload" method="POST")
      input#file(type="file" name="file")
      br
      input#fileTitle(name="title")
      br
      button#submit upload!
</template>
