<template>
    <div>
        <navigation></navigation>
        <br>
        <el-row>
            <el-col :xs="0" :sm="0" :md="0" :lg="1" :xl="3"></el-col>
            <el-col :xs="24" :sm="14" :md="15" :lg="13" :xl="12">
                <blog-content :blog="blog"></blog-content>
                <br>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
            <el-col :xs="24" :sm="9" :md="8" :lg="8" :xl="5">
                <blog-card :blog="blog"></blog-card>
                <br>
                <list-comment-card :blog="blog"></list-comment-card>
            </el-col>
            <el-col :xs="0" :sm="0" :md="0" :lg="1" :xl="3"></el-col>
        </el-row>
    </div>
</template>

<script>
    import BlogContent from "../components/BlogContent";
    import Navigation from "../components/Navigation";
    import ListCommentCard from "../components/ListCommentCard";
    import BlogCard from "../components/BlogCard";

    export default {
        name: "Blog",
        components: {BlogCard, ListCommentCard, Navigation, BlogContent},
        data() {
            return {
                blog: ''
            }
        },
        methods: {},
        created() {
            const _this = this;
            const param = this.$route.query.id;
            this.axios.get('http://localhost/blog/getBlogById' + '?id=' + param).then(function (response) {
                // console.log(response.data);
                _this.blog = response.data;
            })
        }
    }
</script>

<style scoped>

</style>