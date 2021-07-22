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
                            <el-button type="success" @click="getEmailCode">获取验证码</el-button>
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
    export default {
        name: "Register",
        data() {
            return {
                form: {
                    username:'',
                    password:'',
                    email:'',
                    emailCode:'',
                    picture:'',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            getEmailCode(){
                console.log('getEmailCode!');
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