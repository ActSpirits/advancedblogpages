<template>
    <el-card class="box-card" style="margin-bottom: 18px">
        <template #header>
            <div class="card-header">
                <span>博客列表</span>
            </div>

        </template>
        <!--单个博客展示div-->
        <div v-for="item in 4">
            <el-row>
                <el-col :xs="24" :sm="8" :md="10" :lg="7" :xl="7">
                    <div class="myAvatar">
                        <img src="../assets/bg.png" class="image">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="14" :lg="17" :xl="17">
                    <div style="font-weight: bold;">
                        thymeleaf模板引擎
                        <el-tag type="success" size="mini">标签二</el-tag>
                    </div>
                    <div style="font-weight: 300">
                        Thymeleaf是一个流行的模板引擎，该模板引擎采用Java语言开发，模板引擎是一个技术名词，是跨领域跨平台的概念，在Java语言体系下有模板引擎。
                    </div>
                    <br>
                    <div>
                        <span><i class="el-icon-date"></i> 2021-06-27</span>
                        <el-divider direction="vertical"></el-divider>
                        <span><i class="el-icon-view"></i> 64</span>
                        <el-divider direction="vertical"></el-divider>
                        <span><i class="el-icon-s-comment"></i> 000</span>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
        </div>

        <el-pagination
                background
                layout="prev, pager, next"
                page-size="4"
                :total="8">
        </el-pagination>


    </el-card>
</template>


<script>
    export default {
        name: "ListBlogContentById",
        components: {}
    }
</script>

<style scoped>
    .myAvatar {
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        border-radius: 5px;
        overflow: hidden;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        color: teal;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .image {
        width: 100%;
        display: block;
    }
</style>


