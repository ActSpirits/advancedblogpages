<template>
    <div>
        <Navigation></Navigation>
        <br>
        <router-view></router-view>
        <el-affix position="bottom" :offset="0" style="text-align: center" z-index="100">
            <div style="color: teal">Copyright &copy; 2021 ActSpirits Design by ActSpirits.</div>
            <a target="_blank" href="http://beian.milt.gov.cn/" style="color: #409EFF">鄂ICP备2021008805号-1</a>
        </el-affix>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";

    export default {
        name: "Index",
        components: {
            Navigation,
        }
    }
</script>

<style scoped>

</style>