<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <div style="font-weight: bold;">评论列表</div>
                    <span style="font-weight: bold;">共{{blog.commentNumber}}条</span>
                    <!--                                        {{commentList}}-->
                </div>
            </template>
            <!--单个评论-->
            <div v-if="commentList.length == 0" style="text-align: center;font-weight: bold">
                暂时还没有评论，欢迎！
            </div>
            <div v-for="item in commentList">
                <el-row>
                    <el-col :span="4">
                        <div>
                            <el-avatar :size="40" :src="item.user.picture"></el-avatar>
                        </div>
                        <div @click="reply(item.id,item.user.username)"
                             style="margin-left: 7px;cursor: pointer;font-size: 12px;color: #99a9bf">
                            回复
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div>
                            <span style="font-weight: bold">{{item.user.username}}</span> <span
                                style="font-size: 12px;color: #99a9bf">{{item.time}}</span>
                        </div>
                        <div style="margin-top: 2px">{{item.content}}</div>
                    </el-col>
                </el-row>
                <el-row v-for="item2 in item.commentList">
                    <el-col :span="3">

                    </el-col>
                    <el-col :span="4">
                        <div>
                            <el-avatar :size="40" :src="item2.user.picture"></el-avatar>
                        </div>
                        <div @click="reply(item2.id,item2.user.username)"
                             style="margin-left: 7px;cursor: pointer;font-size: 12px;color: #99a9bf">
                            回复
                        </div>
                    </el-col>
                    <el-col :span="17">
                        <div>
                            <span style="font-weight: bold">ActSpirits</span>&nbsp;
                            <span style="font-size: 12px;color: #99a9bf">回复</span>&nbsp;
                            <span style="font-size: 12px;color: dodgerblue">@{{item2.parentComment.user.username}}</span>&nbsp;
                            <span style="font-size: 12px;color: #99a9bf">{{item2.time}}</span>
                        </div>
                        <div style="margin-top: 2px">
                            {{item2.content}}
                        </div>
                    </el-col>
                </el-row>
                <br>
            </div>
            <!--/单个评论-->
            <!--            <div style="text-align: center">-->
            <el-form label-position="top" ref="form" :model="form" label-width="80px">
                <input type="text" v-model="form.parentId" style="display: none">
                <el-form-item label="评论内容">
                    <el-input type="textarea" autosize="true" v-model="form.content" :placeholder="form.prompt"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">评论</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
            <!--            </div>-->
        </el-card>
    </div>
</template>

<script>
    import {ElNotification} from "element-plus";

    export default {
        name: "ListCommentCard",
        props: ['blog'],
        components: {
            ElNotification
        },
        data() {
            return {
                commentList: [],
                form: {
                    prompt: '请输入评论内容',
                    content: '',
                    parentId: 0,
                }
            }
        },
        methods: {
            onSubmit() {

                const _this = this;
                const reg = new RegExp('/^\\s+$/');
                if (this.form.content == '' || this.form.content.trim() == '') {
                    ElNotification({
                        message: '评论内容不能为空!',
                        type: 'warning',
                        showClose: false,
                        position: 'bottom-left'
                    })
                } else if (this.form.content.length > 18) {
                    ElNotification({
                        message: '评论内容长度不能超过18个字!',
                        type: 'warning',
                        showClose: false,
                        position: 'bottom-left'
                    })
                } else {
                    this.axios.post(_this.$api + '/comment/insertComment' + '?content=' + _this.form.content + '&parentId=' + _this.form.parentId + '&blogId=' + _this.blog.id, {}, {
                        headers: {
                            token: localStorage.getItem("token")
                        }
                    }).then(function (response) {
                        if (response.data == '评论成功!') {
                            ElNotification({
                                message: response.data,
                                type: 'success',
                                showClose: false,
                                position: 'bottom-left'
                            });
                            _this.axios.get(_this.$api + '/comment/listCommentByBlogId' + '?blogId=' + _this.blog.id).then(function (response) {
                                _this.commentList = response.data;
                            });
                        } else if (response.data.message == "token无效!") {
                            ElNotification({
                                message: "请先登录!",
                                type: 'warning',
                                showClose: false,
                                position: 'bottom-left'
                            })
                            _this.$router.push("/login");
                        }

                    });
                }
            },
            reply(commentId, username) {
                this.form.parentId = commentId;
                this.form.prompt = '@' + username;
                this.form.content = '';
            },
            reset() {
                this.form.parentId = 0;
                this.form.prompt = '请输入评论内容';

            }
        }
        ,
        created() {
            const _this = this;
            const blogId = this.$route.query.id;
            this.axios.get(_this.$api + '/comment/listCommentByBlogId' + '?blogId=' + blogId).then(function (response) {
                console.log(response.data);
                _this.commentList = response.data;
            });
        }
    }
</script>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;

    }

    .margin-l-r-auto {
        margin-left: auto;
        margin-right: auto;
    }
</style>





