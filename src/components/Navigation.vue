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
                    <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="2" v-if="user == ''">
                        <el-menu-item :index="$router.options.routes[1].path" style="text-align: center">
                            <i :class="$router.options.routes[1].class"></i>{{$router.options.routes[1].name}}
                        </el-menu-item>
                    </el-col>
                    <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="2" v-if="user == ''">
                        <el-menu-item :index="$router.options.routes[2].path" style="text-align: center">
                            <i :class="$router.options.routes[2].class"></i>{{$router.options.routes[2].name}}
                        </el-menu-item>
                    </el-col>
                    <el-col :xs="0" :sm="2" :md="3" :lg="3" :xl="2" v-if="user != ''">

                    </el-col>
                    <el-col :xs="24" :sm="4" :md="3" :lg="3" :xl="2" v-if="user != ''">
                        <el-submenu index="1" style="text-align: center">
                            <template #title>{{user.username}}</template>
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
                user: '',
            };
        },
        methods: {
            exit() {
                const _this = this;
                this.axios.get('http://localhost/user/exit').then(function (response) {
                    console.log(response.data);
                    ElNotification({
                        message: response.data,
                        type: 'success',
                        showClose: false,
                        position: 'bottom-left'
                    })
                    _this.user = '';
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
                this.axios.get('http://localhost/user/getLoginUser').then(function (response) {
                    console.log(response);
                    _this.user = response.data;
                })
            }
        },
        created() {
            const _this = this;
            this.axios.get('http://localhost/user/getLoginUser').then(function (response) {
                console.log(response);
                _this.user = response.data;
            })
        }
    }
</script>

