<template>
    <div>

        <el-row>
            <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4"></el-col>
            <el-col :xs="24" :sm="15" :md="15" :lg="12" :xl="12">
                <list-blog-content-by-id :tag-name="tagName"></list-blog-content-by-id>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5" :xl="3">
                <el-affix :offset="86">
                    <list-tag-card @change-tag="tagName = $event"></list-tag-card>
                    <article-rank></article-rank>
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
    import ListTagCard from "../components/ListTagCard";
    import ArticleRank from "../components/ArticleRank";
    import ListBlogContentById from "../components/ListBlogContentByTag";

    export default {
        name: "ListTag",
        components: {
            ListBlogContentById,
            ArticleRank,
            ListTagCard,

        },
        data() {
            return {
                tagName: '',
            }
        },
        methods: {}
    }
</script>

<style scoped>


</style>