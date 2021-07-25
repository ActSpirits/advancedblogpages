<template>
    <div>
        <el-row>
            <el-col :xs="24" :sm="6" :md="5" :lg="4" :xl="3">
                <nav-menu></nav-menu>
            </el-col>
            <el-col :xs="24" :sm="18" :md="19" :lg="20" :xl="21">
                <router-view></router-view>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import NavMenu from "../components/admin/NavMenu";

    export default {
        name: "Admin",
        components: {NavMenu}
    }
</script>

<style scoped>

</style>