<template>
    <Navigation></Navigation>
    <br>
    <div>
        <el-row :gutter="10">
            <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="4">

            </el-col>
            <el-col :xs="24" :sm="22" :md="22" :lg="20" :xl="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span style="font-weight: bold;color: teal">用户登录</span>
                        </div>
                    </template>
                    <el-form label-position="top" ref="form" :model="form" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <div style="margin-bottom: 15px">
                            <span type="warning" @click="forgetUser" style="text-decoration: underline;cursor: pointer;color: darksalmon;font-size: 14px">忘记账号/密码？</span>
                        </div>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="4">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {ElNotification} from 'element-plus';
    import Navigation from "../components/Navigation";

    export default {
        name: "Login",
        components: {
            ElNotification, Navigation
        },
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            forgetUser() {
                const _this = this;
                this.$prompt('请输入账号预留邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    _this.axios.post(_this.$api + '/user/sendUserToEmail',{
                        email:value
                    },{

                    }).then(function (response) {
                        if (response.data.message == '已将账号密码信息发送至邮箱!'){
                            ElNotification({
                                message: response.data.message,
                                type: 'success',
                                showClose: false,
                                position: 'bottom-left'
                            })
                        }else {
                            ElNotification({
                                message: response.data.message,
                                type: 'error',
                                showClose: false,
                                position: 'bottom-left'
                            })
                        }
                    })
                }).catch(() => {
                    ElNotification({
                        message: "取消输入",
                        type: 'info',
                        showClose: false,
                        position: 'bottom-left'
                    })
                });
            },
            onSubmit() {
                const _this = this;
                this.axios.post(_this.$api + '/user/login' + '?username=' + this.form.username + '&password=' + this.form.password).then(function (response) {
                    console.log(response);
                    if (response.data.message == "登录成功!") {
                        ElNotification({
                            message: response.data.message + ' 即将跳转到首页!',
                            type: 'success',
                            showClose: false,
                            position: 'bottom-left'
                        });
                        localStorage.setItem("token",response.data.token);
                        setTimeout(
                            function () {
                                _this.$router.push('/');
                            }, 2500
                        )

                    } else {
                        ElNotification({
                            message: response.data.message,
                            type: 'error',
                            showClose: false,
                            position: 'bottom-left'
                        })
                    }
                })
            },
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




