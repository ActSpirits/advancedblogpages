
<template>
    <el-card shadow="hover" class="box-card item">
        <template #header>
            <div class="card-header">
                <div class="name margin-l-r-auto" style="color: #ff0000">
                    <i class="fab fa-hotjar"></i> 热文排行
                </div>
            </div>
        </template>
        <div v-for="(item,index) in articleRank" :key="item" class="text">&nbsp;
            <span style="font-weight: 500">{{item.title}}</span> <i class="far fa-eye"></i> {{item.view}}
            <el-divider style="margin-top: 15px!important;margin-bottom: 15px!important;" v-if="index<articleRank.length-1"></el-divider>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ArticleRank",
        data() {
            return {
                articleRank:[
                    {
                        title:'thymeleaf模板引擎',
                        view:10
                    },
                ]
            };
        },
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


