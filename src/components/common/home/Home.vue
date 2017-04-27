/*
 * Home 模块
 * @Author: Guoxing.han 
 * @Date: 2017-04-26 17:30:36 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
  */
<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import vHeader from '../layout/Header'
import vSidebar from '../layout/Sidebar'

export default {
    components: {        
        vHeader, vSidebar
    }
}
</script>
