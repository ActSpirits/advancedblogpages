<template>
    <div>
        <el-affix :offset="8">
            <el-menu
                    :default-active="$router.options.routes[0].children[0].path"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    default-active="/"
                    router>
                <el-menu-item style="font-family: Helvetica;font-size: 20px">ActSpirits</el-menu-item>
                <el-menu-item :index="item.path" v-for="(item,index) in $router.options.routes[0].children">
                    <i :class="item.class"></i>{{item.name}}
                </el-menu-item>

            </el-menu>
        </el-affix>

    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {};
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

