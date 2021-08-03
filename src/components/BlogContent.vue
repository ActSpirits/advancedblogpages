<template>
    <div>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>博客详情</span>
<!--                    <div class="block" style="margin-top: -5px;margin-bottom: -5px">-->
<!--                        <span class="demonstration"> &nbsp;&nbsp;&nbsp;&nbsp;博客字体&nbsp;&nbsp;&nbsp;&nbsp; </span>-->
<!--                        <el-slider max="26" v-model="fontSize"></el-slider>-->
<!--                    </div>-->
                </div>
            </template>
            <div style="text-align: center;font-size: 26px;font-weight: bold">{{blog.title}}&nbsp;
                <el-tag type="success" size="medium" v-if="ifShow" v-text="tagName"></el-tag>
            </div>
            <br>
            <div style="text-align: center;">
                <i class="el-icon-date"></i> {{blog.time}} <i class="el-icon-view"></i> {{blog.view}} <i
                    class="far fa-thumbs-up"></i> {{like}}
            </div>
            <br>
            <v-md-preview :text="blog.content"></v-md-preview>
            <div style="text-align: center">
                <el-button type="success" icon="el-icon-thumb" circle @click="increaseLike"></el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    import VMdPreview from '@kangc/v-md-editor/lib/preview';
    import '@kangc/v-md-editor/lib/style/preview.css';
    import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
    import '@kangc/v-md-editor/lib/theme/style/github.css';
    import {ElNotification} from "element-plus";
    VMdPreview.use(githubTheme)

    export default {
        name: "BlogContent",
        components:{
            VMdPreview
        },
        props: ['blog'],
        data() {
            return {
                like: '',
                fontSize: 16,
                ifShow: true,
                tagName: '',
                content:'嘻嘻哈哈',
            }
        },
        watch:{
            blog:function (blog) {
                this.tagName = blog.tag.name;
                this.like = blog.like;
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            },
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
                        _this.like = response.data.like;
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
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        color: teal;
    }


</style>


