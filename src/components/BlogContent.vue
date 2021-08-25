<template>
    <div>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>博客详情</span>
                </div>
            </template>
            <div style="text-align: center;font-size: 26px;font-weight: bold">{{blog.title}}&nbsp;
                <el-tag type="success" size="medium" v-if="ifShow" v-text="tagName"></el-tag>
            </div>
            <br>
            <div style="text-align: center;">
                <i class="el-icon-date"></i> {{blog.time}} <i class="el-icon-view"></i> {{blog.view}} <i
                    class="far fa-thumbs-up"></i> {{blog.like}}
            </div>
            <br>
            <v-md-preview :text="blog.content"></v-md-preview>
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
                blog1: this.blog,
                fontSize: 16,
                ifShow: true,
                tagName: '',
                content:'嘻嘻哈哈',
            }
        },
        watch:{
            blog:function (blog) {
                this.tagName = blog.tag.name;
            },

        },
        methods: {
            formatTooltip(val) {
                return val / 100;
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


