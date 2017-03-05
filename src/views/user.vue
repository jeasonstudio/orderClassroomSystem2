<template>
    <Card :bordered="false">
        <p slot="title">个人中心</p>
        <i-form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
            <Form-item prop="user">
                <i-input type="text" :value.sync="formInline.user" placeholder="学号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item prop="password">
                <i-input type="password" :value.sync="formInline.password" placeholder="密码：同学号">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" @click="handleSubmit('formInline')">登录</i-button>
            </Form-item>
        </i-form>
    </Card>
</template>

<script>
    import util from '../libs/util.js'

    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        }, ready() {

        }, beforeDestroy() {

        }, methods: {
            handleSubmit(name) {
                util.ajax.post('/api.php/login', {
                    uname: 'Fred',
                    passwd: 'Flintstone'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }, components: {

        }
    };

</script>

<style>
    .useStatus {
        color: #fff;
        background-color: #FF0000;
    }
    
    .buttonBox {
        margin: 10px 0;
    }
    
    .ivu-form-item {
        display: block;
        width: 80%;
        padding: 0 10%;
    }
</style>