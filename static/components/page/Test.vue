<template lang="html">
  <div class="">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 测试</el-breadcrumb-item>
            <el-breadcrumb-item>Todo</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data: function(){
      return {
          fileList: []
      }
  },
  methods:{
      handleRemove(file, fileList) {
          console.log(file, fileList);
      },
      handlePreview(file) {
          console.log(file);
      },
      handleError(){
          this.$notify.error({
              title: '上传失败',
              message: '图片上传接口上传失败，可更改为自己的服务器接口'
          });
      }
  }
}
</script>

<style lang="css">
</style>
