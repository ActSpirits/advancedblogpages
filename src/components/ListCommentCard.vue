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
                            <el-avatar :size="40" :src="item.picture"></el-avatar>
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
                            <el-avatar :size="40" :src="item2.picture"></el-avatar>
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
                <el-form-item label="评论内容">
                    <el-input type="textarea" v-model="form.content" :placeholder="form.prompt"></el-input>
                    <el-input type="text" v-model="form.parentId"></el-input>
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
    export default {
        name: "ListCommentCard",
        props: ['blog'],
        data() {
            return {
                commentList: [],
                form: {
                    prompt:'请输入评论内容',
                    content: '',
                    parentId: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            reply(commentId,username) {
                this.form.parentId = commentId;
                this.form.prompt = '@'+username;
            },
            reset(){
                this.form.parentId = '';
                this.form.prompt = '请输入评论内容';

            }
        }
        ,
        created() {
            const _this = this;
            const blogId = this.$route.query.id;
            this.axios.get('http://localhost/comment/listCommentByBlogId' + '?blogId=' + blogId).then(function (response) {
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





