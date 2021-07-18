<template>
    <div>
        <el-card class="box-card">
<!--            <template #header>-->
<!--                <div class="card-header">-->
<!--                    <div style="font-weight: bold;" class="margin-l-r-auto">博客首图</div>-->
<!--                </div>-->
<!--            </template>-->
            <img src="../assets/bg.png" style="width: 100%;border-radius: 5px">
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "BlogCard"
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;


    }
    .margin-l-r-auto{
        margin-left: auto;
        margin-right: auto;
    }
</style>