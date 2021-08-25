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
                <el-button type="success" icon="el-icon-thumb" circle @click="$emit('increaseLike')" title="给博客点赞"></el-button>
<!--                <el-button type="success" icon="fab fa-qq" circle title="分享到QQ" @click="shareToRoom"></el-button>-->
            </div>
        </el-card>
    </div>
</template>

<script>
    import {ElNotification} from "element-plus";

    export default {
        name: "BlogCard",
        props:['blog'],
        data(){
            return{
                title:'',
                desc:'',
                picture:'',
                href: window.location.href,
            }
        },
        methods: {
            // shareToQQ() {
            //     //此处分享链接内无法携带图片
            //     const share = {
            //         title: this.title,
            //         desc: this.desc,
            //         share_url: window.location.href,
            //     };
            //     location.replace(
            //         "https://connect.qq.com/widget/shareqq/index.html?url=" +
            //         encodeURIComponent(share.share_url) +
            //         "&title=" +
            //         share.title +
            //         "&desc=" +
            //         share.desc
            //     );
            // },

            // shareToRoom() {
            //     //自定义内容
            //     const share = {
            //         title: this.title,
            //         desc: this.desc,
            //         image_url: [this.picture],
            //         share_url: this.href
            //     };
            //     let image_urls = share.image_url.map(function(image) {
            //         return encodeURIComponent(image);
            //     });
            //     //跳转地址
            //     location.replace(
            //         "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
            //         encodeURIComponent(share.share_url) +
            //         "&title=" +
            //         share.title +
            //         "&pics=" +
            //         image_urls.join("|") +
            //         "&summary=" +
            //         share.desc
            //     );
            // }
        },
        watch:{
            blog:function (blog) {
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
    .margin-l-r-auto{
        margin-left: auto;
        margin-right: auto;
    }
</style>