<template>
    <div>
        <el-card class="box-card">
            <!--            <template #header>-->
            <!--                <div class="card-header">-->
            <!--                    <div style="font-weight: bold;" class="margin-l-r-auto">博客首图</div>-->
            <!--                </div>-->
            <!--            </template>-->
            <img :src="blog.picture" style="width: 100%;border-radius: 5px">
            <br/>
            <br/>
            <div style="text-align: center">
                <el-button type="success" icon="el-icon-thumb" circle @click="$emit('increaseLike')"
                           title="给博客点赞"></el-button></div>
        </el-card>
    </div>
</template>

<script>
    import {ElNotification} from "element-plus";

    export default {
        name: "BlogCard",
        props: ['blog'],
        data() {
            return {
                title: '',
                desc: '',
                picture: '',
                href: window.location.href,
            }
        },
        methods: {

        },
        watch: {
            blog: function (blog) {
                this.title = blog.title;
                this.desc = blog.description;
                this.picture = blog.picture;
            },
        }
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;


    }

    .margin-l-r-auto {
        margin-left: auto;
        margin-right: auto;
    }
</style>