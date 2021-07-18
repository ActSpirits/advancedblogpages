<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>博客详情</span>
                    <div class="block" style="margin-top: -5px;margin-bottom: -5px">
                        <span class="demonstration"> &nbsp;&nbsp;&nbsp;&nbsp;博客字体&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <el-slider  max="26" v-model="fontSize"></el-slider>
                    </div>
                </div>
            </template>

            <div style="text-align: center;font-size: 26px;font-weight: bold">thymeleaf模板引擎
                <el-tag type="success" size="medium">MySQL</el-tag>
            </div>
            <br>
            <div style="text-align: center;">
                <i class="el-icon-date"></i> 2021-07-16 <i class="el-icon-view"></i> 2 <i class="far fa-thumbs-up"></i>
                3
            </div>
            <br>
            <div v-bind:style="'font-size:'+fontSize+'px'">
                23岁

                她陪你参加朋友的婚礼。

                婚礼上新郎亲吻新娘。

                你搂着身边的她说：我们也结婚吧。

                她偏偏挣脱你的怀抱扭过头，

                我才不要嫁给你呢。

                脸上却都是甜蜜。
            </div>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "BlogContent",
        data() {
            return {
                fontSize: 16,
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            },
        }
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        color: teal;
    }


</style>


