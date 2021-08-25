<template>
    <el-card shadow="hover" class="box-card item">
        <div v-for="(item,index) in websiteInformation" :key="item" class="text">

            <span style="font-weight: bold;font-size: 15px;color:deepskyblue;">{{item.number}}</span>
            &nbsp
            <span style="font-weight: bold">{{item.name}}</span>
            <hr size="1px" style="margin-top: 12px!important;margin-bottom: 12px!important;"
                v-if="index<websiteInformation.length-1" />
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "StatisticalCard",
        data() {
            return {
                websiteInformation: [
                    {number: 10, name: '篇文章'},
                    {number: 0, name: '条评论'},
                    {number: 2114, name: '博客总访问量'},
                ]
            };
        },
        created() {
            const _this = this;
            this.axios.get(_this.$api+'/statistical/get').then(function (response) {
                // console.log(response);
                _this.websiteInformation[0].number = response.data.blogNumber;
                _this.websiteInformation[1].number = response.data.commentNumber;
                _this.websiteInformation[2].number = response.data.totalView;
            })
        }
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


