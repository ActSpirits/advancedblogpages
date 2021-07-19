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
            <div style="text-align: center;font-size: 26px;font-weight: bold">{{blog.title}}
                <el-tag type="success" size="medium"></el-tag>
            </div>
            <br>
            <div style="text-align: center;">
                <i class="el-icon-date"></i> {{blog.time}} <i class="el-icon-view"></i> {{blog.view}} <i class="far fa-thumbs-up"></i> {{blog.like}}
            </div>
            <br>
            <div v-bind:style="'font-size:'+fontSize+'px'">
                {{blog.content}}
            </div>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "BlogContent",
        props:['blog'],
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


