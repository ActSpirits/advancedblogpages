
<template>
    <el-card shadow="hover" class="box-card item">
        <template #header>
            <div class="card-header">
                <div class="name margin-l-r-auto" style="color: #ff0000">
                    <i class="fab fa-hotjar"></i> 热文排行
                </div>
            </div>
        </template>
        <div style="cursor: pointer" :title="item.title" @click="getBlog(item.id)" v-for="(item,index) in articleRank" :key="item" class="text">

            <span style="color: orangered">
                <i class="fas fa-fire-alt"></i> {{item.title.substring(0,8)}}...
            </span>
            &nbsp;<i class="far fa-eye"></i> {{item.view}}

            <el-divider v-if="index<articleRank.length-1"></el-divider>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ArticleRank",
        data() {
            return {
                articleRank:[]
            };
        },
        methods:{
            getBlog(id){
                this.$router.push({path: '/getBlogById', query:{id: id}});
            }
        },
        created() {
            const _this = this;
            this.axios.get(_this.$api+'/blog/listBlogByViewLimited').then(function (response) {
                // console.log(response.data);
                _this.articleRank = response.data;
            })
        }
    }
</script>

<style>
    .name {
        font-size: 16px;
        font-weight: bold;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .margin-l-r-auto {
        margin-left: auto;
        margin-right: auto;
    }
    .text {
        font-size: 14px;
    }

    /*.item {*/
    /*    padding: 18px 0;*/
    /*}*/

    .item {
        margin-bottom: 18px;
    }

</style>


