<template>
    <div>
        <el-card  class="box-card item"  shadow="hover">
            <template #header>
                <div class="card-header">
                    <i class="fas fa-home"></i>
                    <div class="name margin-l-r-auto">关于我</div>
                    <!--                    <el-button class="button" type="text">详细信息</el-button>-->
                </div>
            </template>
            <div class="myAvatar">
                <img src="../assets/doge.jpg" class="image">
            </div>
            <br>
            <div class="card-header">
                <div class="name margin-l-r-auto">ActSpirits</div>
            </div>
            <div class="card-header item">
                <div class="note margin-l-r-auto">
                    千禧年出生
                </div>
            </div>
            <div class="card-header item">
                <div class="margin-l-r-auto" style="font-size: 14px">
                    一枚Java渣,寻找心中的OnePiece
                </div>
            </div>
            <div class="card-header">
                <div class="margin-l-r-auto">

                </div>
            </div>

        </el-card>

    </div>
</template>

<script>
    export default {
        name: "AboutMeCard",
    }
</script>

<style scoped>
    .myAvatar {
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        border-radius: 50%;
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

    .margin-l-r-auto{
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






