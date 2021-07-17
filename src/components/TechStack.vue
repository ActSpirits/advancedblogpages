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
                <div>使用MySQL作为数据库，使用Redis对数据库中频繁访问的信息做redis缓存，并定时将redis中的数据持久化进数据库</div>
            </el-collapse-item>
            <el-collapse-item title="组件" name="4">
                <div style="font-weight: bold">editormd</div>
                <div>
                    博客编辑组件
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
