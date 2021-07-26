<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" router>
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>博客</span>
                </template>
                <el-menu-item index="/admin">博客写作</el-menu-item>
                <el-menu-item index="/manageBlog">博客管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>标签</span>
                </template>
                <el-menu-item index="/insertTag">标签新增</el-menu-item>
                <el-menu-item index="/manageTag">标签管理</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>


