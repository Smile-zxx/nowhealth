<template>
  <el-row class="page">
    <el-col :span="24" style="position: absolute;">
      <the-header></the-header>
    </el-col>
    <el-col :span="24" class="page-main">
      <the-sidebar ></the-sidebar>
      <section class="page-content" :class="{'page-content-hide-aside': openNav}">
        <!-- <the-main>main</the-main>
        <the-footer>foot</the-footer> -->
      </section>
    </el-col>
  </el-row>
</template>

<script>
import Header from '../../components/Header'
import Aside from '../../components/Aside'

export default {
  name: 'TheLayout',
  data () {
    return {
      openNav: true
    }
  },
  methods: {
    toggleOpen () {
      this.openNav = !this.openNav
    }
  },
  components: {
    'the-header': Header,
    'the-sidebar': Aside,
  }
}
</script>

<style scoped lang="scss">
.page {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  .page-main {
    box-sizing: border-box;
    padding-top: 60px;
    height: 100%;

    .page-content {
      overflow: auto;
      margin-left: 240px;
      height: 100%;
      background-color: #EBEEF5;
    }

    .page-content-hide-aside {
      margin-left: 65px;
    }
  }
}
</style>