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
                <!--                {{user}}-->
                <el-menu-item v-if="user != ''">
                    {{user.username}}
                </el-menu-item>
                <!--                    </el-col>-->
                <!--                </el-row>-->


            </el-menu>
        </el-affix>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                user: '',
            };
        },
        methods: {
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

