<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="4">

            </el-col>
            <el-col :xs="24" :sm="22" :md="22" :lg="20" :xl="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span style="font-weight: bold;color: teal">用户注册</span>
                        </div>
                    </template>
                    <div style="text-align: center;margin-bottom: 8px;font-weight: bold">
                        头像
                    </div>
                    <div style="text-align: center">
                        <el-avatar :size="120"></el-avatar>
                    </div>
                    <el-form label-position="top" ref="form" :model="form" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success" @click="getEmailCode" v-if="time == 0">获取验证码</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="info" v-if="time>0">{{time}}s有效</el-button>
                        </el-form-item>
                        <el-form-item label="邮箱验证码">
                            <el-input v-model="form.emailCode"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">注册</el-button>
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

    export default {
        name: "Register",
        components: {
            ElNotification
        },
        data() {
            return {
                time: 0,
                form: {
                    username: '',
                    password: '',
                    email: '',
                    emailCode: '',
                    picture: '1',
                }
            }
        },
        methods: {
            onSubmit() {
                const _this = this;
                if (this.form.username == '') {
                    ElNotification({
                        message: '请先输入用户名!',
                        type: 'warning',
                        showClose: false,
                        position: 'top-left'
                    });
                } else if (this.form.password == '') {
                    ElNotification({
                        message: '请先输入密码!',
                        type: 'warning',
                        showClose: false,
                        position: 'top-left'
                    });
                } else if (this.form.email == '') {
                    ElNotification({
                        message: '请先输入邮箱!',
                        type: 'warning',
                        showClose: false,
                        position: 'top-left'
                    });
                }else if (this.form.emailCode == '') {
                    ElNotification({
                        message: '请先输入邮箱验证码!',
                        type: 'warning',
                        showClose: false,
                        position: 'top-left'
                    });
                } else {
                    this.axios.get('http://localhost/user/register' + '?username=' + _this.form.username + '&password=' + _this.form.password + '&email=' + _this.form.email + '&emailCode=' + _this.form.emailCode + '&picture=' + _this.form.picture).then(function (response) {
                        if (response.data == '注册成功!'){
                            ElNotification({
                                message: response.data+'即将跳转首页!',
                                type: 'success',
                                showClose: false,
                                position: 'top-left'
                            });
                            setTimeout(
                                function () {
                                    _this.$router.push('/');
                                },2500
                            )
                        }else {
                            ElNotification({
                                message: response.data,
                                type: 'warning',
                                showClose: false,
                                position: 'top-left'
                            });
                        }

                    })
                }
            },
            getEmailCode() {
                const _this = this;
                if (this.form.email == '') {
                    ElNotification({
                        message: '请先输入邮箱!',
                        type: 'warning',
                        showClose: false,
                        position: 'top-left'
                    });
                } else {
                    this.axios.get('http://localhost/user/sendEmailCode' + '?email=' + _this.form.email).then(function (response) {
                        console.log(response.data);
                        if (response.data == '发送不成功,邮箱不存在!') {
                            ElNotification({
                                message: response.data,
                                type: 'warning',
                                showClose: false,
                                position: 'top-left'
                            });
                        } else if (response.data == '该邮箱已被注册!') {
                            ElNotification({
                                message: response.data,
                                type: 'warning',
                                showClose: false,
                                position: 'top-left'
                            });
                        } else {
                            ElNotification({
                                message: response.data,
                                type: 'success',
                                showClose: false,
                                position: 'top-left'
                            });
                            _this.time = 60;
                            setInterval(function () {
                                if (_this.time > 0) {
                                    _this.time -= 1;
                                }
                            }, 1000)
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