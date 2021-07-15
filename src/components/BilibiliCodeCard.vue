<template>
    <div>
        <el-card class="box-card item" shadow="hover">

            <el-divider><i class="el-icon-mobile-phone"></i>关注我</el-divider>
            <div class="myAvatar">
                <img src="../assets/bilibiliCode.jpg" class="image">
            </div>

        </el-card>

    </div>
</template>

<script>
    export default {
        name: "BilibiliCodeCard",
    }
</script>

<style scoped>
    .myAvatar {
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        overflow: hidden;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .note {
        font-size: 13px;
        color: darkgray;
        font-weight: normal;
    }

    .name {
        font-size: 16px;
        font-weight: bold;

    }

    .margin-l-r-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .item {
        margin-bottom: 18px;
    }

    .image {
        width: 100%;
        display: block;
    }

</style>






