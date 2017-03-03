<template>
    <div class="header-wraper">
    <!--
        <header class="header header-home">
            <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-row>
                    <el-col :xs="18" :sm="18">
                        <span>sss</span>
                    </el-col>
                    <el-col :xs="4" :sm="2">
                        <el-menu-item index="1">处理中心</el-menu-item>
                    </el-col>
                    <el-col :xs="4" :sm="2">
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-col>
                </el-row>
            </el-menu>
        </header>
        -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="css">
    .el-menu {
        background-color: #20A0FF;
    }
</style>