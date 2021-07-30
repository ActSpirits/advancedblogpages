<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>标签</el-breadcrumb-item>
                        <el-breadcrumb-item>标签管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </template>
            <el-table
                    :data="list"
                    style="width: 100%">
                <el-table-column
                        label="标签名"
                        width="180">
                    <template #default="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
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
        </el-card>
    </div>
</template>

<script>
    import {ElNotification} from "element-plus";

    export default {
        name: "ManageTag",
        components: {
            ElNotification
        },
        data() {
            return {
                list: [],
            }
        },
        methods: {
            handleEdit(index, row) {
                const _this = this;
                this.$prompt('请输入新标签名', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^.+$/,
                    inputErrorMessage: '标签名不能为空!'
                }).then(({value}) => {
                    _this.axios.post(_this.$api + '/admin/tag/updateTagName' + '?id=' + row.id + '&name=' + value, {}, {
                        headers: {
                            token: localStorage.getItem("token")
                        }
                    }).then(function (response) {
                        console.log(response);
                        ElNotification({
                            message: response.data,
                            type: 'success',
                            showClose: false,
                            position: 'bottom-left'
                        });
                        _this.axios.post(_this.$api + '/admin/tag/listTag', {}, {
                            headers: {
                                token: localStorage.getItem("token")
                            }
                        }).then(function (response) {
                            _this.list = response.data;
                        });
                    })
                }).catch(() => {
                    ElNotification({
                        message: '已取消修改',
                        type: 'success',
                        showClose: false,
                        position: 'bottom-left'
                    });
                });
            },


            handleDelete(index, row) {
                const _this = this;
                this.$confirm('此操作将永久删除该标签, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    _this.axios.post(_this.$api + '/admin/tag/deleteTagById' + '?id=' + row.id, {}, {
                        headers: {
                            token: localStorage.getItem("token")
                        }
                    }).then(function (response) {
                        ElNotification({
                            message: response.data,
                            type: 'success',
                            showClose: false,
                            position: 'bottom-left'
                        });
                        _this.axios.post(_this.$api + '/admin/tag/listTag', {}, {
                            headers: {
                                token: localStorage.getItem("token")
                            }
                        }).then(function (response) {
                            _this.list = response.data;
                        })
                    })
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
            this.axios.post(_this.$api + '/admin/tag/listTag', {}, {
                headers: {
                    token: localStorage.getItem("token")
                }
            }).then(function (response) {
                _this.list = response.data;
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






