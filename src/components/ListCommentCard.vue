<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <div style="font-weight: bold;">评论列表</div>
                    <span style="font-weight: bold;">共10条</span>
                    <!--                    <el-button class="button" type="text">操作按钮</el-button>-->
                </div>
            </template>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ListCommentCard"
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;

    }
    .margin-l-r-auto{
        margin-left: auto;
        margin-right: auto;
    }
</style>