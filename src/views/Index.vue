<template>
    <div>
        <Navigation></Navigation>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";

    export default {
        name: "Index",
        components: {
            Navigation,
        }
    }
</script>

<style scoped>

</style>