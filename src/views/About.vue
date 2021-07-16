<template>
    <div>
        <el-row>
            <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4"></el-col>
            <el-col :xs="24" :sm="15" :md="15" :lg="12" :xl="12">
                <about-me-content></about-me-content>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5" :xl="3">
                <about-me-card></about-me-card>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4"></el-col>
        </el-row>
    </div>
</template>


<script>
    import AboutMeContent from "../components/AboutMeContent";
    import AboutMeCard from "../components/AboutMeCard";

    export default {
        name: "About",
        components: {
            AboutMeCard,
            AboutMeContent

        }
    }
</script>

<style scoped>



</style>