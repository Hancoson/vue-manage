/*
 * @Author: Guoxing.han 
 * @Date: 2017-04-27 16:58:56 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
  */
<template>
  <header class="header-wrap">
    <div class="logo fl">后台管理</div>
    <el-menu index="about" theme="dark" :default-active="activeIndex" class="el-menu-demo fl" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/about">关于系统</el-menu-item>
      <el-menu-item index="/m/table">后台管理</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
import { bus } from '../../../utils/bus.js';

export default {
  data() {
    return {
      activeIndex: this.$route.path.replace('/', '') === 'about' ? '/about' : '/m/table'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      bus.$emit('id-selected', key)
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/mixin';
.header-wrap {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: $head-color;
  background: $head-bg;
  .logo {
    font-size: 20px;
    padding: 0 100px 0 30px;
  }
}
</style>