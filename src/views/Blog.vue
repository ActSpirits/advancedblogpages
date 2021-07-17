<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                blog:''
            }
        },
        methods: {},
        created() {
            const _this = this;
            const param = this.$route.query.id;
            this.axios.get('http://localhost/blog/getBlogById'+'?id='+param).then(function (response) {
                console.log(response.data);
                _this.blog = response.data;
            })
        }
    }
</script>

<style scoped>

</style>