<template>
    <Card :bordered="false">
        <p slot="title">个人中心</p>
        <i-form v-ref:form-custom :model="formCustom" :rules="ruleCustom" :label-width="80">
            <Form-item label="学号：" prop="username">
                <i-input type="text" :value.sync="formCustom.username">
                    <Icon type="ios-person-outline" slot="prepend" class="left-text"></Icon>
                </i-input>
            </Form-item>
            <Form-item label="密码：" prop="password">
                <i-input type="password" :value.sync="formCustom.password">
                    <Icon type="ios-locked-outline" slot="prepend" class="left-text"></Icon>
                </i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" :loading="loginLoad" @click="handleSubmit('formCustom')">登录</i-button>
                <i-button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">清空</i-button>
            </Form-item>
        </i-form>
    </Card>
</template>

<script>
    import util from '../libs/util.js'

    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入学号'));
                } else {
                    if (this.formCustom.password !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('password');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };

            return {
                loginLoad: false,
                LoginCookie: null,
                formCustom: {
                    username: '',
                    password: ''
                },
                ruleCustom: {
                    username: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                let that = this
                that.loginLoad = true
                console.log(util)
                // this.$http.jsonp('http://test-ocs.kalen.site/api.php/login?uname=计通院办&passwd=A62332873').then(function (res) {
                //     console.log(this)
                //     that.$Message.success('提交成功!' + res.body.msg);
                //     that.loginLoad = false
                // }).catch(function (err) {
                //     console.log(this)
                //     that.$Message.error('表单验证失败!' + res.body.msg);
                //     that.loginLoad = false
                // })
                util.ajax.post('/api.php/login',{
                    uname: '计通院办',
                    passwd: 'A62332873'
                }).then(function (res) {
                    console.log(res)
                    that.$Message.success('提交成功!');
                    that.loginLoad = false
                    console.log(document.cookie)
                    that.LoginCookie = document.cookie
                }).catch(function (err) {
                    // console.log(err)
                    that.$Message.error('表单验证失败!');
                    that.loginLoad = false
                })
            },
            handleReset(name) {
                let that = this
                // this.$http.jsonp('http://test-ocs.kalen.site/api.php/user/get_info').then(function (res) {
                //     console.log(res)
                // }).catch(function (err) {
                //     // that.loginLoad = false
                // })
                util.ajax.post('/api.php/user/get_info').then(function (res) {
                    console.log(res)
                    that.$Message.success('提交成功!' + res.body.msg);
                }).catch(function (err) {
                    that.$Message.error('表单验证失败!' + res.body.msg);
                })
                this.$refs[name].resetFields();
            }
        }
    }

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
        padding: 0 10%;
    }
</style>