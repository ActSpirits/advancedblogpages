<template>
    <div>
        <el-card class="box-card" style="margin-bottom: 18px">
            <template #header>
                <div class="card-header">
                    <div class="name margin-l-r-auto" style="color: teal">
                        <i class="fas fa-tags"></i> 标签列表
                    </div>
                </div>
            </template>
            <el-badge v-for="item in list"  :value="item.blogNumber" class="item margin-l-r-t-b-small" type="warning">
                <el-button size="small" style="color: teal">{{item.name}}</el-button>
            </el-badge>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ListTagCard",
        data() {
            return {
                list: [],
            }
        },
        created() {
            const _this = this;
            this.axios.get('http://localhost/tag/listTag').then(function (response) {
                // console.log(response);
                _this.list = response.data;
            })
        }
    }
</script>

<style scoped>
    .margin-l-r-t-b-small {
        margin-left: 6px;
        margin-right: 6px;
        margin-top: 4px;
        margin-bottom: 4px;
    }

    .name {
        font-size: 16px;
        font-weight: bold;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .margin-l-r-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

</style>


