<template lang="html">
  <div class="wrapper">
    <v-head></v-head>
    <v-side></v-side>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHead from './Head.vue'
import vSide from './Side.vue'
export default {
  components:{
    vHead,vSide
  }
}
</script>

<style lang="css">
</style>
