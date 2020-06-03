<template>
  <aside class="sidebar" :class="{'sidebar-hide': !openNav}">
    <el-menu class="sidebar-menu" :collapse="!openNav" :collapse-transition="false" :router="true">
      <template v-for="menu in user.accessMenu">
        <el-menu-item v-if="!menu.children" :key="menu.name" :index="menu.path">
          <i :class="menu.icon" v-if="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
        <el-submenu :key="menu.id" :index="menu.path" v-else>
          <template slot="title">
            <i :class="menu.icon" v-if="menu.icon"></i>
            <span slot="title">{{menu.title}}</span>
          </template>
          <template v-for="item in menu.children">
            <el-menu-item :key="item.id">
              <a-icon :type="item.icon" v-if="item.icon" />
              <span>{{item.title}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import SubMenu from "./SubMenu.vue";

export default {
  name: "Aside",
  components: {
    "the-submenu": SubMenu
  },
  data() {
    return {
      openNav: true,
      user: {
        accessMenu: [
          {
            id:0,
            path: "/index",
            name: "index",
            title: "首页",
            icon: "el-icon-s-home"
          },
          {
            id:2,
            path: "/",
            name: "level1",
            title: "一级目录",
            icon: "el-icon-s-operation",
            children: [
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              }
            ]
          },
          {
            id:1,
            path: "/",
            name: "level1",
            title: "一级目录",
            icon: "el-icon-s-operation",
            children: [
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              },
              {
                path: "/",
                name: "level2",
                title: "二级目录"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  float: left;
  width: 240px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  overflow: auto;

  .sidebar-menu {
    border: none;
    height: 100%;
  }
}

.sidebar-hide {
  width: 65px;
}
</style>
