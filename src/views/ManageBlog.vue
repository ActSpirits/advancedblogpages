<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>博客</el-breadcrumb-item>
                        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </template>
            <el-table
                    :data="list"
                    style="width: 100%">
                <el-table-column
                        label="标题"
                        width="180">
                    <template #default="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="标签"
                        width="180">
                    <template #default="scope">
                        <el-popover effect="light" trigger="hover" placement="bottom">
                            <template #default>
                                <p>
                                    <el-image :src="scope.row.picture" fit="fill"></el-image>
                                </p>
                                <p>日期: {{ scope.row.time }}</p>
                                <p>浏览: {{ scope.row.view }}</p>
                                <p>喜欢: {{ scope.row.like }}</p>
                            </template>
                            <template #reference>
                                <div class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.tag.name }}</el-tag>
                                </div>
                            </template>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="total"
                    @current-change="page"
            >
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    import {ElNotification} from "element-plus";

    export default {
        name: "ManageBlog",
        components: {
            ElNotification
        },
        data() {
            return {
                list: '',
                pageSize: '',
                total: '',
            }
        },
        methods: {
            page(currentPage) {
                const _this = this;
                this.axios.post(_this.$api + '/admin/blog/listBlog' + '?pn=' + currentPage,
                    {

                    },
                    {
                        headers: {
                            token : localStorage.getItem("token")
                        }
                    }
                ).then(function (response) {
                    _this.list = response.data.list;
                    _this.pageSize = response.data.pageSize;
                    _this.total = response.data.total;
                });
            },
            handleEdit(index, row) {
                console.log(index, row);
                const _this = this;
                this.$router.push('/updateBlog' + '?id=' + row.id);
            },
            handleDelete(index, row) {
                const _this = this;
                this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    _this.axios.post(_this.$api + '/admin/blog/deleteBlogById' + '?id=' + row.id,
                        {},
                        {
                            headers: {
                                token: localStorage.getItem("token")
                            }
                        }
                    ).then(function (response) {
                        ElNotification({
                            message: response.data,
                            type: 'success',
                            showClose: false,
                            position: 'bottom-left'
                        });
                        _this.axios.post(_this.$api + '/admin/blog/listBlog',
                            {},
                            {
                                headers: {
                                    token: localStorage.getItem("token")
                                }
                            }
                        ).then(function (response) {
                            _this.list = response.data.list;
                            _this.pageSize = response.data.pageSize;
                            _this.total = response.data.total;
                        })
                    });
                }).catch(() => {
                    ElNotification({
                        message: '已取消删除',
                        type: 'success',
                        showClose: false,
                        position: 'bottom-left'
                    });
                });
            }
        },
        created() {
            const _this = this;
            this.axios.post(_this.$api + '/admin/blog/listBlog',
                {},
                {
                    headers: {
                        token: localStorage.getItem("token")
                    }
                }
            ).then(function (response) {
                console.log(response.data);
                _this.list = response.data.list;
                _this.pageSize = response.data.pageSize;
                _this.total = response.data.total;
            })

        }
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>






