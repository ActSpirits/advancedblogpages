<template>
    <div>
        <el-row>
            <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4"></el-col>
            <el-col :xs="24" :sm="15" :md="15" :lg="12" :xl="12">
                <list-blog-content></list-blog-content>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5" :xl="3">
                <about-me-card></about-me-card>
                <statistical-card></statistical-card>
                <bilibili-code-card></bilibili-code-card>
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
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>