
<template>
    <el-card shadow="hover" class="box-card item">
        <div v-for="(item,index) in websiteInformation" :key="item" class="text">
            <span style="font-weight: bold;font-size: 15px;color:deepskyblue;">{{item.number}}</span>
            &nbsp;
            <span style="font-weight: bold">{{item.name}}</span>
            <el-divider style="margin-top: 12px!important;margin-bottom: 12px!important;" v-if="index<websiteInformation.length-1"></el-divider>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "StatisticalCard",
        data() {
            return {
                websiteInformation:[
                    {number: 10,name:'篇文章'},
                    {number: 0,name:'条留言'},
                    {number: 0,name:'条评论'},
                    {number: 2114,name:'首页访问量'},
                ]
            };
        },
    }
</script>

<style>
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


