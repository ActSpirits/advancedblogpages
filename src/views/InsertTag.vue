<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>标签</el-breadcrumb-item>
                        <el-breadcrumb-item>标签新增</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </template>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="标签名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">新增标签</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {ElNotification} from "element-plus";

    export default {
        name: "InsertTag",
        components: {
            ElNotification
        },
        data() {
            return {
                form: {
                    name: '',
                }
            }
        },
        methods: {
            onSubmit() {
                const _this = this;
                if (_this.form.name == '') {
                    ElNotification({
                        message: '请先填写新增标签名称!',
                        type: 'warning',
                        showClose: false,
                        position: 'bottom-left'
                    });
                } else {
                    _this.axios.get('http://localhost/admin/tag/insertTag' + '?name=' + _this.form.name).then(function (response) {
                        if (response.data == '添加失败,该标签已存在!'){
                            ElNotification({
                                message: response.data,
                                type: 'warning',
                                showClose: false,
                                position: 'bottom-left'
                            });
                        }else {
                            ElNotification({
                                message: response.data,
                                type: 'success',
                                showClose: false,
                                position: 'bottom-left'
                            });
                            _this.$router.push('/manageTag');
                        }
                    })
                }
            }
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


