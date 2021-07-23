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
                <!--                <el-row justify="start">-->
                <!--                    <el-col :xs="24" :sm="3" :md="3" :lg="7" :xl="7">-->
                <el-menu-item @click="redirectToHome"
                              style="font-family: Helvetica;font-size: 20px;color: dodgerblue">ActSpirits
                </el-menu-item>
                <!--                    </el-col>-->
                <!--                    <el-col :xs="24" :sm="8" :md="3" :lg="7" :xl="7">-->
                <!--                <el-menu-item :index="item.path" v-for="(item,index) in $router.options.routes[0].children"  v-if="(user != '')">-->
                <!--                <el-menu-item :index="item.path" v-for="(item,index) in $router.options.routes[0].children"  v-if=" item !=  ''">-->
                <el-menu-item :index="item.path" v-for="(item,index) in $router.options.routes[0].children">
                    <i :class="item.class"></i>{{item.name}}
                </el-menu-item>
                <el-menu-item :index="$router.options.routes[1].path" v-if="user == ''">
                    <i :class="$router.options.routes[1].class"></i>{{$router.options.routes[1].name}}
                </el-menu-item>
                <el-menu-item :index="$router.options.routes[2].path" v-if="user == ''">
                    <i :class="$router.options.routes[2].class"></i>{{$router.options.routes[2].name}}
                </el-menu-item>
                <!--                {{user}}-->
                <el-submenu index="1" v-if="user != ''">
                    <template #title>{{user.username}}</template>
                    <el-menu-item @click="exit">退出登录</el-menu-item>
                </el-submenu>
                <!--                    </el-col>-->
                <!--                </el-row>-->


            </el-menu>
        </el-affix>
    </div>
</template>

<script>
    import { ElNotification } from 'element-plus';
    export default {
        name: "Navigation",
        components:{
            ElNotification
        },
        data() {
            return {
                user: '',
            };
        },
        methods: {
            exit(){
                const _this = this;
                this.axios.get('http://localhost/user/exit').then(function (response) {
                    console.log(response.data);
                    ElNotification({
                        message: response.data,
                        type: 'success',
                        showClose: false,
                        position: 'top-left'
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

