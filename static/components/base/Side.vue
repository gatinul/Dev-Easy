<template lang="html">
<div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <el-submenu  index="1">
        <template slot="title"><i class="el-icon-menu"></i>Mock开发</template>
        <el-menu-item index="mockView">模拟界面</el-menu-item>
        <el-menu-item index="intfEdit">接口编辑</el-menu-item>
        <el-menu-item index="intfPreview">接口总览</el-menu-item>
      </el-submenu >
    </el-menu>
</div>
</template>

<script>
export default {
  computed:{
      onRoutes(){
          return this.$route.path.replace('/','');
      }
  }
}
</script>

<style lang="css">
.sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
}
.sidebar > ul {
    height:100%;
}
</style>
