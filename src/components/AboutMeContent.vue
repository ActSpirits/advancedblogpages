<template>
    <el-card class="box-card" style="margin-bottom: 18px">
        <template #header>
            <div class="card-header">
                <span>ActSpirits</span>
            </div>
            <span style="font-weight: normal!important;font-size: 12px!important;color: teal">说出来你可能不信，我从小就做梦能有一个属于自己的网站。</span>
        </template>

        <div class="card-header">
            <span>简介</span>
        </div>
        <div style="margin-top: 10px;margin-bottom: 20px">
            出生于湖北荆州，暂居武汉，武汉轻工大学18级学生。
        </div>

        <div class="card-header">
            <span>能力介绍</span>
        </div>
        <div style="margin-top: 10px;margin-bottom: 20px">
            <div style="margin-top: 8px;margin-bottom: 8px">1. 熟悉SSM，Springboot，MybatisPlus框架。</div>
            <div style="margin-top: 8px;margin-bottom: 8px"> 2. 熟悉Linux基本命令，服务器的搭建，项目的部署。</div>
            <div style="margin-top: 8px;margin-bottom: 8px"> 3. 熟悉Git，本网站基于git开发，前端部分已开源。</div>
            <div style="margin-top: 8px;margin-bottom: 8px"> 4. 熟悉Redis</div>
        </div>

        <br>
        <div class="card-header">
            <span>网站技术栈</span>
        </div>
        <tech-stack></tech-stack>


    </el-card>
</template>


<script>
    import TechStack from "./TechStack";

    export default {
        name: "AboutMeContent",
        components: {TechStack}
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


