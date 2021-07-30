<template>
    <div>
        <el-affix :offset="8">
            <el-menu
                    :default-active="this.$route.path"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="white"
                    text-color="black"
                    active-text-color="deepskyblue"
                    router>
                <el-row justify="start">
                    <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="2">
                        <el-menu-item @click="redirectToHome"
                                      style="font-family: Helvetica;font-size: 20px;color: dodgerblue;text-align: center">
                            ActSpirits
                        </el-menu-item>
                    </el-col>
                    <el-col :xs="0" :sm="0" :md="0" :lg="0" :xl="2">

                    </el-col>
                    <el-col :xs="8" :sm="3" :md="3" :lg="3" :xl="2"
                            v-for="(item,index) in $router.options.routes[0].children">
                        <el-menu-item :index="item.path" style="text-align: center">
                            <i :class="item.class"></i>{{item.name}}
                        </el-menu-item>
                    </el-col>
                    <el-col :xs="0" :sm="6" :md="6" :lg="3" :xl="6">

                    </el-col>
                    <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="2" v-if="user.username == ''">
                        <el-menu-item :index="$router.options.routes[1].path" style="text-align: center">
                            <i :class="$router.options.routes[1].class"></i>{{$router.options.routes[1].name}}
                        </el-menu-item>
                    </el-col>
                    <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="2" v-if="user.username == ''">
                        <el-menu-item :index="$router.options.routes[2].path" style="text-align: center">
                            <i :class="$router.options.routes[2].class"></i>{{$router.options.routes[2].name}}
                        </el-menu-item>
                    </el-col>
                    <el-col :xs="0" :sm="2" :md="3" :lg="3" :xl="2" v-if="user.username != ''">

                    </el-col>
                    <el-col :xs="24" :sm="4" :md="3" :lg="3" :xl="2" v-if="user.username != ''">
                        <el-submenu index="1" style="text-align: center">
                            <template #title>
                                <el-avatar :src="user.picture"></el-avatar>
                            </template>
                            <el-menu-item style="text-align: center" @click="manage(user.type)">{{user.username}}</el-menu-item>
                            <el-menu-item @click="exit" style="text-align: center">退出登录</el-menu-item>
                        </el-submenu>
                    </el-col>
                    <el-col :xs="0" :sm="0" :md="0" :lg="3" :xl="4">
                    </el-col>
                </el-row>


            </el-menu>
        </el-affix>
    </div>
</template>

<script>
    import {ElNotification} from 'element-plus';

    export default {
        name: "Navigation",
        components: {
            ElNotification
        },
        data() {
            return {
                user: {
                    id:'',
                    username:'',
                    email:'',
                    picture:'',
                    time:'',
                    type:'',
                }
            };
        },
        methods: {
            manage(type){
                if (type==1){
                    this.$router.push("/admin");
                }
            },
            exit() {
                const _this = this;
                this.axios.get(_this.$api+'/user/exit').then(function (response) {
                    console.log(response.data);
                    ElNotification({
                        message: response.data.message,
                        type: 'success',
                        showClose: false,
                        position: 'bottom-left'
                    })
                    localStorage.setItem("token",response.data.token);
                    _this.user.id = '';
                    _this.user.username = '';
                    _this.user.email = '';
                    _this.user.picture = '';
                    _this.user.time = '';
                    _this.user.type = '';
                })

            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            redirectToHome() {
                location.href = '/';
            }
        },
        watch: {
            $route(to, from) {
                const _this = this;
                this.axios.post(_this.$api+'/user/getLoginUser',{
                    headers:{
                        token:localStorage.getItem("token")
                    }
                }).then(function (response) {
                    // console.log(response);
                    if (response.data.message == '用户已登录!'){
                        _this.user.id = response.data.id;
                        _this.user.username = response.data.username;
                        _this.user.email = response.data.email;
                        _this.user.picture = response.data.picture;
                        _this.user.time = response.data.time;
                        _this.user.type = response.data.type;
                    }
                })
            }
        },
        created() {
            const _this = this;
            this.axios.post(_this.$api+'/user/getLoginUser',{

            },{
                headers:{
                    token:localStorage.getItem("token")
                }
            }).then(function (response) {
                // console.log(response);
                if (response.data.message == '用户已登录!'){
                    _this.user.id = response.data.id;
                    _this.user.username = response.data.username;
                    _this.user.email = response.data.email;
                    _this.user.picture = response.data.picture;
                    _this.user.time = response.data.time;
                    _this.user.type = response.data.type;
                }
            })
        }
    }
</script>

