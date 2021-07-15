<template>
    <div>
        <el-row>
            <el-col :span="1"></el-col>
            <el-col :span="15">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="6">
                <about-me-card></about-me-card>
                <statistical-card></statistical-card>
            </el-col>
            <el-col :span="1"></el-col>
        </el-row>


    </div>
</template>


<script>
    import AboutMeCard from "../components/AboutMeCard";
    import StatisticalCard from "../components/StatisticalCard";

    export default {
        name: "Home",
        components: {
            AboutMeCard,
            StatisticalCard
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>