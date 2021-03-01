<template>
  <div class="home">
    <el-menu mode="horizontal" router class="nav-bar">
      <div class="logo">
        <el-image :src="require('@/assets/logo.jpg')" fit="contain" style="height: 45px"></el-image>
      </div>
      <!--      <div class="router">-->
      <el-menu-item index="/home/line" class="mar-timeline">时间轴</el-menu-item>
      <el-menu-item index="/name" class="mar-name">烈士英名录</el-menu-item>
      <el-menu-item index="/event" class="mar-event">上大历史事件</el-menu-item>
      <!--      </div>-->
    </el-menu>
    <router-view/>
    <!--    <el-card class="footer" shadow="false">-->
    <!--      <div class="power">-->
    <!--        Powered by Group 3-->
    <!--      </div>-->
    <!--    </el-card>-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      user: null
    }
  }

}
</script>

<style scoped>
.home {

}
.nav-bar {
  display: flex;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
  width: 300px;
}

.profile {
  position: absolute;
  right: 0;
}
</style>
