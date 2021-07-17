<template>
    <el-card class="box-card" style="margin-bottom: 18px">
        <template #header>
            <div class="card-header">
                <span>博客列表</span>
                <el-button v-if="tag" type="success" size="small" style="margin-top: -10px!important;margin-bottom: -10px!important;" plain>中等按钮</el-button>
            </div>

        </template>
        <!--单个博客展示div-->
        <div v-for="item in list">
            <el-row>
                <el-col :xs="24" :sm="8" :md="10" :lg="7" :xl="7">
                    <div class="myAvatar">
                        <!--                        <img :src="item.picture" class="image">-->
                        <img src="../assets/bg.png" class="image">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="14" :lg="17" :xl="17">
                    <div style="font-weight: bold;">
                        <a @click="getBlog(item.id)" style="color: black;text-decoration: none;cursor: pointer">{{item.title}}</a> <el-tag type="success" size="mini">{{item.tag.name}}</el-tag>
                    </div>
                    <div style="font-weight: 300">
                        {{item.description}}
                    </div>
                    <br>
                    <div>
                        <span><i class="el-icon-date"></i> {{item.time}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span><i class="el-icon-view"></i> {{item.view}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span><i class="far fa-thumbs-up"></i> {{item.like}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span><i class="el-icon-s-comment"></i> {{item.commentNumber}}</span>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
        </div>

        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page"
        >
        </el-pagination>


    </el-card>
</template>


<script>
    import SearchInput from "./SearchInput";

    export default {
        name: "ListBlogContentByTag",
        components: {SearchInput},
        data() {
            return {
                pageSize:'',
                total:'',
                list:[],
                tag: '',
            }
        },
        methods: {
            page(currentPage) {
                const _this = this;
                this.axios.get('http://localhost/blog/listBlogByTagName'+'?pn='+currentPage+'&tagName='+_this.tag).then(function (response) {
                    _this.list = response.data.list;
                    _this.pageSize = response.data.pageSize;
                    _this.total = response.data.total;
                });
            },
            getBlog(id){
                this.$router.push({path: '/getBlogById', query:{id: id}});
            }
        },
        created() {
            const _this = this;
            this.axios.get('http://localhost/blog/listBlog').then(function (response) {
                // console.log(response);
                // console.log(response.data.list);
                _this.list = response.data.list;
                _this.pageSize = response.data.pageSize;
                _this.total = response.data.total;
            })
        }
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


