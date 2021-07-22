<template>
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
    import { ElNotification } from 'element-plus';
    export default {
        name: "Login",
        components:{
            ElNotification
        },
        data() {
            return {
                form: {
                    username:'',
                    password:'',
                }
            }
        },
        methods: {
            onSubmit() {
                const _this = this;
                this.axios.get('http://localhost/user/login'+'?username='+this.form.username+'&password='+this.form.password).then(function (response) {
                    console.log(response);
                    if (response.data == "登录成功!"){
                        ElNotification({
                            message: response.data+' 即将跳转到首页!',
                            type: 'success',
                            showClose: false,
                            position: 'top-left'
                        })
                    setTimeout(
                       function () {
                           _this.$router.push('/');
                       },2500
                    )

                    }
                    else {
                        ElNotification({
                            message: response.data,
                            type: 'error',
                            showClose: false,
                            position: 'top-left'
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






