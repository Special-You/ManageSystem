<template>
    <div>
        <h2 class="title">欢迎来到后台管理系统</h2>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        created(){
            this.outQuery(1);
        },
        methods:{
            outQuery(curr){
                let obj = {};
                obj.params = {};
                obj.params.type = 1;
                obj.current = curr;
                obj.size = 10;
                $api.http.post($api.queryOut,obj)
                    .then(data=>{
                        if(data.flag === 1){
                           console.log(data)
                        }else {
                            if (data.message === 'token is invalid') {
                                this.$router.push('Login')
                            } else {
                                this.$Message.warning(data.message);
                            }
                        }
                    })
                    .catch(error=>{
                        this.$Message.error('网络请求失败');
                    })
            },
        }
    }
</script>

<style scoped>
    .title {
        margin: 20px 50px;
        font-weight: bold;
        font-size: 26px;
        letter-spacing: 5px;
        color: #1f83e2;
    }
</style>
