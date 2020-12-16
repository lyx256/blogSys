<template>
  <el-container class="login">

        <el-main>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
                <h3 class="title">博客后台管理</h3>
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号" prefix-icon="el-icon-user-solid">
                        <v-icon slot="prefix" class="el-input__icon input-icon"/>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="密码" v-model="loginForm.password" show-password prefix-icon="el-icon-lock">
                        <v-icon slot="prefix"  class="el-input__icon input-icon"/>
                    </el-input>
                </el-form-item>


                <el-form-item style="width:100%;">
                    <el-button
                            :loading="loading"
                            size="medium"
                            type="primary"
                            style="width:100%;"
                            @click.native.prevent="handleLogin"
                    >
                        <span v-if="!loading">登 录</span>
                        <span v-else>登 录 中...</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <div class="el-login-footer">
                <span>Technical support -- LL.com.cn</span>
            </div>
        </el-footer>
    </el-container>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
    .el-header, .el-footer {
        width: 100%;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        background-color: rgba(255, 255, 255, 0);
        display: flex;
        display: -webkit-flex;
        align-items: center;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 2.5;
        background-color: rgba(255, 255, 255, 0);
        display: flex;
        display: -webkit-flex;
        align-items: center;
    }

    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/login-background.jpg");
        height: 100%;
      background-size: cover;

    }
    .title {
        margin: 0px auto 30px auto;
        text-align: center;
        color: #ffffff;
    }
    img {
        cursor: pointer;
        vertical-align: middle;
    }
   /* .input-icon {
        height: 14px;
        width: 14px;
        margin-left: 2px;

    }*/

    .el-login-footer {
        height: 40px;
        line-height: 40px;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
        margin: auto;
    }
</style>

