<template>

    <div>
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Layout1 from "../components/Layout1";

    export default {
        name: "Index",
        components: {
            Navigation,
            Layout1
        }
    }
</script>

<style scoped>

</style>