<template>
    <div>
        <navigation></navigation>
        <br>

        <el-row>
            <el-col :xs="0" :sm="0" :md="0" :lg="1" :xl="3">
            </el-col>
            <el-col :xs="24" :sm="14" :md="16" :lg="13" :xl="12">
                <blog-content :blog="blog"></blog-content>
                <br>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
            <el-col :xs="24" :sm="9" :md="7" :lg="8" :xl="5">
                <el-affix :offset="86">
                    <blog-card :blog="blog" @increaseLike="increaseLike"></blog-card>
                    <br>
                    <list-comment-card :blog="blog"></list-comment-card>
                </el-affix>
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
    import {ElNotification} from "element-plus";
    // import { mavonEditor } from "mavon-editor";
    // import "mavon-editor/dist/css/index.css";

    export default {
        name: "Blog",
        components: {BlogCard, ListCommentCard, Navigation, BlogContent},
        data() {
            return {
                blog: '',
                value: '',
            }
        },
        methods: {
            increaseLike(){
                const _this = this;
                const param = this.$route.query.id;
                this.axios.post(_this.$api+'/blog/increaseLikeById',{
                    param
                },{
                    headers:{
                        token: localStorage.getItem("token")
                    }
                }).then(function (response) {
                    if (response.data.message == '点赞成功!'){
                        console.log(response.data.like);
                        _this.blog.like = response.data.like;
                        ElNotification({
                            message: response.data.message,
                            type: 'success',
                            showClose: false,
                            position: 'bottom-left'
                        })
                    }else {
                        ElNotification({
                            message: '请先登录!',
                            type: 'info',
                            showClose: false,
                            position: 'bottom-left'
                        })
                    }
                })
            }
        },
        created() {
            const _this = this;
            const param = this.$route.query.id;
            this.axios.get(_this.$api + '/blog/getBlogById' + '?id=' + param).then(function (response) {
                // console.log(response.data);
                _this.blog = response.data;
            })
        }
    }
</script>

<style scoped>

</style>