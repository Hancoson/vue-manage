/*
 * @Author: Guoxing.han 
 * @Date: 2017-04-27 16:58:56 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
  */
<template>
  <div class="sidebar-wrap">
    <div v-if="thePath=='about'">
      <el-menu default-active="/about" class="el-menu-vertical-demo" theme="dark" router>
        <el-submenu index="about">
          <template slot="title"><i class="el-icon-menu"></i>关于系统</template>
          <el-menu-item index="/about">介绍</el-menu-item>
          <el-menu-item index="about/use">选项2</el-menu-item>
  
        </el-submenu>
        <el-menu-item>导航二</el-menu-item>
        <el-menu-item>导航三</el-menu-item>
      </el-menu>
    </div>
    <div v-else>
      haha
    </div>
  </div>
</template>

<script>
import { bus } from '../../../utils/bus.js';
export default {
  data() {
    return {
      thePath: this.$route.path.replace('/', '')
    }
  },

  created() {
    bus.$on('id-selected', p => {
      this.thePath = p.replace('/', '')
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/mixin';
.sidebar-wrap {
  display: block;
  position: absolute;
  width: 200px;
  top: 60px;
  left: 0;
  bottom: 0;
  background: $sidebar-bg;
  ul {
    height: 100%
  }
}
</style>