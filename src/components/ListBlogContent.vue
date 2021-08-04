<template>
    <el-card class="box-card" style="margin-bottom: 18px">
        <template #header>
            <div class="card-header">
                <span>博客列表</span>
<!--                <el-form :inline="true" :model="formInline" class="demo-form-inline"-->
<!--                         style="margin-top: -5px;margin-bottom: -25px">-->
<!--                    <el-form-item size="small">-->
<!--                        <el-input v-model="formInline.content" prefix-icon="el-icon-search"-->
<!--                                  placeholder="根据标题搜索"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item size="small">-->
<!--                        <el-button type="primary" @click="onSubmit">查询</el-button>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
            </div>
        </template>
        <!--单个博客展示div-->
        <div v-for="item in list">
            <el-row>
                <el-col :xs="24" :sm="8" :md="10" :lg="7" :xl="7">
                    <div class="myAvatar">
                        <img :src="item.picture" class="image">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="14" :lg="17" :xl="17">
                    <div style="font-weight: bold;">
                        <a @click="getBlog(item.id)" style="color: black;text-decoration: none;cursor: pointer">{{item.title}}</a>
                        <el-tag type="success" size="mini">{{item.tag.name}}</el-tag>
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


    export default {
        name: "ListBlogContent",
        components: {SearchInput},
        data() {
            return {
                pageSize: '',
                total: '',
                list: [],
                formInline: {
                    content: '',
                }
            }
        },
        methods: {
            onSubmit() {
                const _this = this;
                this.axios.post(_this.$api + '/blog/listBlog', {
                    content: _this.formInline.content
                }).then(function (response) {
                    Reflect.get(_this.list,"0",response.data.list);
                    // _this.list.splice(0);
                    // _this.list = response.data.list;
                    _this.pageSize = response.data.pageSize;
                    _this.total = response.data.total;

                });
            },
            page(currentPage) {
                const _this = this;
                this.axios.post(_this.$api + '/blog/listBlog', {
                    pn: currentPage,
                    content: _this.formInline.content
                }).then(function (response) {
                    _this.list = response.data.list;
                    _this.pageSize = response.data.pageSize;
                    _this.total = response.data.total;
                });
            },
            getBlog(id) {
                this.$router.push({path: '/getBlogById', query: {id: id}});
            }
        },
        created() {
            const _this = this;
            this.axios.post(_this.$api + '/blog/listBlog', {}).then(function (response) {
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

    .image {
        width: 100%;
        display: block;
    }
</style>


