<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>博客</el-breadcrumb-item>
                        <el-breadcrumb-item>博客写作</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </template>
            <el-form ref="form" :model="form" label-width="80px">
                <el-row>
                    <el-col :md="12" :lg="12" :xl="12">
                        <el-form-item label="标题">
                            <el-input v-model="form.title"></el-input>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-select v-model="form.tagId" placeholder="请选择标签">
                                <el-option v-for="item in tagList" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="12" :lg="12" :xl="12">
                        <div style="text-align: center">
                            <el-upload
                                    :with-credentials="true"
                                    :action="$api+'/admin/blog/uploadPicture'"
                                    name="picture"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"

                            >
                                <img v-if="form.picture" :src="form.picture" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-col>
                </el-row>
                <el-form-item label="博客描述">
                    <el-input type="textarea" v-model="form.description" autosize="true"></el-input>
                </el-form-item>
                <el-form-item label="博客内容">
                    <v-md-editor v-model="form.content" height="600px">

                    </v-md-editor>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">创建</el-button>
                    <el-button>保存</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import VMdEditor from '@kangc/v-md-editor';
    import '@kangc/v-md-editor/lib/style/base-editor.css';
    import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
    import '@kangc/v-md-editor/lib/theme/style/github.css';
    import {ElNotification} from "element-plus";

    VMdEditor.use(githubTheme);
    export default {
        name: "UpdateBlog",
        components: {
            VMdEditor, ElNotification
        },
        data() {
            return {
                tagList: [],
                form: {
                    id: '',
                    title: '',
                    tagId: '',
                    description: '',
                    content: '',
                    picture: '',
                }
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                console.log(res);
                if (res == '请先登录!') {
                    ElNotification({
                        message: res,
                        type: 'warning',
                        showClose: false,
                        position: 'bottom-left'
                    });
                } else {
                    this.form.picture = this.$api+ + res;
                }

            },
            onSubmit() {
                const _this = this;
                if (this.form.title == '' || this.form.tagId == '' || this.form.description == '' || this.form.content == '' || this.form.picture == '') {
                    ElNotification({
                        message: '请全部填写!',
                        type: 'warning',
                        showClose: false,
                        position: 'bottom-left'
                    });
                } else {
                    this.axios.request({
                        url: _this.$api+'/admin/blog/updateBlogById',
                        method: 'post',
                        data: _this.form
                    }).then(function (response) {
                        console.log(response.data);
                        if (response.data == '修改博客成功!') {
                            ElNotification({
                                message: '修改博客成功!',
                                type: 'success',
                                showClose: false,
                                position: 'bottom-left'
                            });
                            _this.$router.push("/manageBlog");
                        }
                    });
                }
            }
        },
        created() {
            const _this = this;
            this.axios.get(_this.$api+'/tag/listTag').then(function (response) {
                _this.tagList = response.data;
            })
            this.axios.get(_this.$api+'/admin/blog/getBlogById' + '?id=' + _this.$route.query.id).then(function (response) {
                console.log(response.data);
                _this.form.id=response.data.id;
                _this.form.title=response.data.title;
                _this.form.picture=response.data.picture;
                _this.form.tagId=response.data.tag.id;
                _this.form.description=response.data.description;
                _this.form.content=response.data.content;
            })
        }
    }
</script>

<style scoped>

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 192px;
        height: 108px;
        line-height: 108px;
        text-align: center;
    }

    .avatar {
        width: 192px;
        height: 108px;
        display: block;
        border-radius: 4px;
    }
</style>


