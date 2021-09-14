<template>
    <div>
        <el-row>
            <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4"></el-col>
            <el-col :xs="24" :sm="15" :md="15" :lg="12" :xl="12">
                <list-blog-content></list-blog-content>
                <el-affix position="bottom" :offset="0" style="text-align: center" z-index="100">
                    <div style="color: teal">Copyright &copy; 2021 ActSpirits Design by ActSpirits.</div>
                    <a target="_blank" href="http://beian.milt.gov.cn/" style="color: #409EFF">鄂ICP备2021008805号-1</a>
                </el-affix>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5" :xl="3">
                <el-affix :offset="86">
                    <about-me-card></about-me-card>
                    <statistical-card></statistical-card>
                    <bilibili-code-card></bilibili-code-card>
                </el-affix>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4"></el-col>
        </el-row>
    </div>
</template>


<script>
    import AboutMeCard from "../components/AboutMeCard";
    import StatisticalCard from "../components/StatisticalCard";
    import BilibiliCodeCard from "../components/BilibiliCodeCard";
    import ListBlogContent from "../components/ListBlogContent";

    export default {
        name: "Home",
        components: {
            ListBlogContent,
            BilibiliCodeCard,
            AboutMeCard,
            StatisticalCard
        }
    }
</script>

<style scoped>

</style>