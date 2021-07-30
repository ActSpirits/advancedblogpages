<template>
    <div>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="前端" name="1">
                <div style="font-weight: bold">Vue | Element-Plus</div>
                <div>先进行前端页面的开发，再编写后端接口。</div>
            </el-collapse-item>
            <el-collapse-item title="后端" name="2">
                <div style="font-weight: bold">SSM | Springboot</div>
                <div>后端编写接口实现功能</div>
            </el-collapse-item>
            <el-collapse-item title="数据库" name="3">
                <div style="font-weight: bold">MySQL | Redis</div>
                <div>使用MySQL作为数据库，使用Redis进行邮箱验证码存储</div>
            </el-collapse-item>
            <el-collapse-item title="登录鉴权" name="4">
                <div style="font-weight: bold">JWT</div>
                <div>
                    不适用cookie的情况下实现登录鉴权
                </div>
            </el-collapse-item>
            <el-collapse-item title="组件" name="5">
                <div style="font-weight: bold">v-md-editor</div>
                <div>
                    轻量版编辑器
                </div>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'TechStack',
        data() {
            return {
                activeNames: []
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style>

</style>
