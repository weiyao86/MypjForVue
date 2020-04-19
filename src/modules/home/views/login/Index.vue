<template>
    <div class="login-wrap">
        <div class="header-logo">
            <img src="static/8.jpg" alt="">
        </div>
        <div class="login-form">
           <!--  <mt-field label="用户名" placeholder="请输入用户名" class="border-1px-bottom" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" class="border-1px-bottom" type="password" v-model="password"></mt-field> -->
            
             <div class="form-cell border-1px-bottom"><i class="fa fa-address-book-o"></i><input type="text" placeholder="请输入用户名" v-model="username"></div>
              <div class="form-cell border-1px-bottom"><i class="fa fa-key"></i><input type="password" placeholder="请输入密码" v-model="pwd"></div>
            <div class="forget-pwd"><a href="javascript:;"><span>忘记密码?</span></a></div>
            <mt-button size="large" type="danger" class="login-btn" @click.native="login()">登录</mt-button>
            <mt-button size="large" type="danger" class="login-btn" @click="register()">注册</mt-button>
            
        </div>
    </div>
</template>
<script>

    import common from '@/lib/common';
    import {Indicator,Toast} from 'mint-ui';
    
    export default{
        name:'Login',
        data(){
            return {
                username:'',
                pwd:''
            }
        },
        mounted(){
            this.enterKeyup();
        },
        destroyed(){
            this.enterKeyDestroyed();
        },
        methods:{
            enterKey(event){
                const keyCode=event.keyCode ? event.keyCode : event.which ? event.keyCode : event.charCode;
                if(keyCode == 13){
                    this.login();
                }
                
            },
            enterKeyup(){
                document.addEventListener("keyup",this.enterKey);
            },
            enterKeyDestroyed(){
                 document.removeEventListener("keyup",this.enterKey);
            },

            register(){
                let me=this;
                
                Indicator.open({
                  text: '注册中...',
                  spinnerType: 'fading-circle'
                });
                
                common.axios({
                        url:'/api/register',
                        method:'POST',
                        data:{
                            username:me.username,
                            pwd:me.pwd
                        }
                }).then(res=>{
                        let data=res.data;
                        if(data.isSuccess){
                             Toast({
                                message:'注册成功',
                                iconClass:'icon icon-success'
                             });
                         }else{
                            Toast({
                                message:'注册失败',
                                iconClass:'icon icon-field-error'
                            });
                         }
                       
                    }).catch(err=>{
                        Toast({
                            message:'注册失败',
                            iconClass:'icon icon-field-error'
                        });
                    }).then(()=>{
                        
                        Indicator.close();
                    });
            },
            login(){
                let me=this;
                  
                Indicator.open({
                  text: '加载中...',
                  spinnerType: 'fading-circle'
                });
                
                common.axios({
                        url:'/api/login',
                        method:'POST',
                        data:{
                            username:this.username,
                            pwd:this.pwd
                        }
                }).then(res=>{
                        let data=res.data;
                        if(data.isSuccess){
                            
                            window.localStorage.setItem("userInfo",data.token);
                            console.log('userInfo信息收集完毕')
                            console.log(localStorage.getItem("userInfo"))
                             Toast({
                                message:'登录成功',
                                iconClass:'icon icon-success'
                             });
                             me.$router.push({path:'/Main'});
                         }else{
                            Toast({
                                message:data.msg,
                                iconClass:'icon icon-field-error'
                            });
                         }
                       
                    }).catch(err=>{
                        Toast({
                            message:'登录失败',
                            iconClass:'icon icon-field-error'
                        });
                    }).then(()=>{
                        
                        Indicator.close();
                    });
            }
        }
    }
</script>
<style type="text/css" lang="scss" >
    input::placeholder{
        color:#ccc;
    }
    .mint-cell{
        background: transparent;
        .mint-field-core{
            background: transparent;
            color:#fff;
        }
    }
    .login-wrap{
        background:url("../../../../../static/43.jpg") no-repeat center/cover;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        padding:0 30px;
        &::after{
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            content: "";
            filter: blur(8px);
            background: inherit;
            z-index: -1;
        }
        .header-logo{
            height:30%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width:100px;
                height:100px;
                border-radius: 50%;
            }
        }
    }

    .login-form{
        padding:20px 0;
    }

    .form-cell{
        height: 48px;
        line-height: 48px;
        position: relative;
        text-align:left;
        display: flex;
        align-items: center;
        color:#fff;
        i{
            width:16px;
            font-size: 18px !important;
        }
        input{
            font-size:16px;
            background: transparent;
            flex:1;
            padding-left: 1em;
            color:#fff;
            height: 100%;
        }
    }

    .forget-pwd{
        text-align:right;
        height:60px;
        line-height: 60px;
        font-size: 14px;
        a{
            color:#fff;

        }
    }

     .login-btn{
        margin:1.25rem 0;
        border-radius: 10px
    }
    
</style>