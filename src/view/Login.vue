<template>
  <el-container class="login">
    <el-header></el-header>
    <el-main>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
        <h3 class="title">博客后台管理</h3>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
            <v-icon slot="prefix" iconClass="user" class="el-input__icon input-icon"/>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter.native="handleLogin"
          >
            <v-icon slot="prefix" iconClass="password" class="el-input__icon input-icon"/>
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
        <span>Technical support --ccic-net.</span>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  import request from "../http/index";
  export default {
    name: 'login',
    data() {
      return {
        codeUrl: "",
        cookiePassword: "",
        loginForm: {
          username: "",
          password: "",
          rememberMe: false,
          uuid: ""
        },
        loginRules: {
          username: [
            {required: true, trigger: "blur", message: "用户名不能为空"}
          ],
          password: [
            {required: true, trigger: "blur", message: "密码不能为空"}
          ],

        },
        loading: false,
        redirect: undefined
      };
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            request.fetchPost("/vuereq/v1/api/login?username=" + this.loginForm.username + "&password=" + this.loginForm.password).then((response) => {          //这里使用了ES6的语法
              console.log(response)       //请求成功返回的数据
              if (response.data.code == 200) {
                this.$message({
                  message: "登陆成功",
                  type: 'success'
                });
                this.$store.dispatch("setUsername", this.loginForm.username)
                this.$router.push({path: "/Head/index"});
              } else
                this.$message.error("登陆失败")
              this.loading = false;
            }).catch((error) => {
              this.$message.error(error);
            })
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    height: 100%;
    background-image: url("../assets/login-background.jpg");
    background-size: cover;
  }

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 25px 25px 5px 25px;
    margin: auto;
    box-sizing: inherit;
  }

  img {
    cursor: pointer;
    vertical-align: middle;
  }

  .input-icon {
    height: 14px;
    width: 14px;
    margin-left: 2px;
  }

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
