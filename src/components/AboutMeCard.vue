<template>
    <div>
        <el-card class="box-card item" shadow="hover">
            <template #header>
                <div class="card-header">
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
                <div style="font-size: 14px;text-align: center">
                    一枚Java渣,寻找心中的OnePiece
                </div>
            </div>
            <div class="card-header">
                <div class="margin-l-r-auto">
                    <el-popover
                            placement="bottom"
                            :width="150"
                            trigger="hover"
                    >
                        <template #reference>
                            <i class="fab fa-qq fa-2x layout"></i>
                        </template>
                        <img src="../assets/codeQQ.png" class="QQimage">
                    </el-popover>
                    <el-popover
                            placement="bottom"
                            :width="150"
                            trigger="hover"
                    >
                        <template #reference>
                            <i class="fab fa-weixin fa-2x layout"></i>
                        </template>
                        <img src="../assets/codeWeChat.jpg" class="QQimage">
                    </el-popover>
                    <el-popover
                            placement="bottom"
                            :width="150"
                            trigger="hover"
                    >
                        <template #reference>
                            <a href="https://github.com/ActSpirits" target="_blank" style="color: black"
                               id="titleGitHub">
                                <i class="fab fa-github fa-2x layout"></i>
                            </a>
                        </template>
                        <div style="text-align: center">点击前往</div>
                    </el-popover>
                </div>
            </div>

        </el-card>

    </div>
</template>

<script>
    export default {
        name: "AboutMeCard",
        data() {
            return {
                visible: false,
            };
        }
    }
</script>

<style scoped>
    .layout {
        margin-left: 10px;
        margin-right: 10px;
    }

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

    .QQimage {
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>










