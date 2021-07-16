<template>
    <el-input
            placeholder="根据标题搜索博客"
            prefix-icon="el-icon-search"
            v-model="input1" style="width: 250px" size="medium">
    </el-input>

</template>
<script>
    import {defineComponent, ref} from 'vue'

    export default defineComponent ({
        name: "SearchInput",
        setup() {
            return {
                input1: ref(''),
            }
        }
    })
</script>

<style scoped>
    .demo-input-label {
        display: inline-block;
        width: 130px;
    }
</style>




