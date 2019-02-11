<template>
    <div>
        <div class="login">
            <Card style="width: 400px;">
                <p slot="title" style="text-align: center">
                    后台管理系统
                </p>
                <Form :model="loginInfo" ref="loginInfo" :rules="ruleForm" :loading = 'loading'>
                    <FormItem prop="username">
                        <Input v-model="loginInfo.phone" size="large" class="account">
                            <span slot="prepend"><Icon type="md-contact" size="22"/></span>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input v-model="loginInfo.password" size="large" type="password" class="password" @on-enter="submitForm('loginInfo')">
                            <span slot="prepend"><Icon type="md-lock" size="22"/></span>
                        </Input>
                    </FormItem>
                    <FormItem style="margin-top: 20px; text-align: center">
                        <Button type="primary" @click="submitForm('loginInfo')" style="margin-right: 20px;">登录</Button>
                        <Button @click="resetForm('loginInfo')">重置</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loading:true,
                loginInfo: {
                    phone: '',
                    password: '',
                },
                ruleForm: {
                    phone: [{required: true, message: '账号必填', trigger: 'blur'}],
                    password: [{required: true, message: '密码必填', trigger: 'blur'}]
                }
            }
        },
        methods:{
            submitForm(name){
                this.$refs[name].validate(valid =>{
                    if(valid){
                        let params = this.loginInfo;
                        $api.http.post($api.login,params)
                            .then(data=>{
                                if(data.flag === 1){
                                    let self = this;
                                    this.loading = false;
                                    this.$Message.success('登录成功！');
                                    setTimeout(function () {
                                        self.$router.push('/');
                                    },1500);
                                    localStorage.setItem('_token',data.data.token);

                                    // console.log(localStorage.getItem('_token'),444)
                                }else {
                                    this.$Message.error(data.message);
                                }
                            })
                            .catch(error=>{
                                this.$Message.error('网络请求失败');
                            })
                    }else {
                        this.$Message.error('请输入账号或密码！')
                    }
                })
            },
            resetForm(name){
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .account, .password{
        margin: 15px auto;
        width: 300px;
    }
</style>

