<template>
  <div class="eshop-login">
    <div class="eshop-login-container">
      <div class="eshop-login-pic">
        <img :src="logo" />
        <a>
          管理系统
        </a>
      </div>
      <div class="eshop-login-form">
        <div>
          <a class="eshop-login-form-topic">
            WelCome
          </a>
          <a-form-model :model="form" layout="vertical">
            <a-form-model-item ref="userName" label="用户名">
              <a-input v-model="form.userName"></a-input>
            </a-form-model-item>

            <a-form-model-item ref="password" label="密码">
              <a-input type="password" v-model="form.password"></a-input>
            </a-form-model-item>

            <a-form-model-item>
              <a-button type="primary" class="eshop-btn-login" @click="login">
                登录
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
import { FormModel, Button, Input } from "ant-design-vue";
export default {
  name: "Hello",
  data() {
    return {
      logo: logo,
      publicPath: process.env.BASE_URL,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      form: {
        userName: "",
        password: ""
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      if (this.form.userName == "admin" && this.form.password == "admin") {
        alert("登陆成功");
        this.$router.push("/analysis");
      } else {
        alert("用户名或密码错误,请重新登录!");
        this.form = {
          userName: "",
          password: ""
        };
      }
    }
  },
  components: {
    AFormModel: FormModel,
    AFormModelItem: FormModel.Item,
    AButton: Button,
    AInput: Input
  }
};
</script>

<style lang="less" scoped>
.eshop-login {
  position: relative;
  height: 100%;
  width: 100%;

  background: url("~@/assets/bg_1.jpg") no-repeat;
  background-size: cover;

  a {
    cursor: auto;
  }
}
.eshop-login-container {
  overflow: auto;
  position: absolute;
  right: 220px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  background-color: white;
  border-radius: 4px 4px;
}
.eshop-login-pic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: center;
  img {
    display: block;
    width: 100%;
  }
  a {
    font-weight: 1000;
    font-size: 32px;
  }
}
.eshop-login-form {
  padding: 16px;
  height: 600px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #f8f8ff;
  box-shadow: 0 0 3px 3px #f5f5f5;
  & > div .ant-form {
    margin: 0 auto;
    width: 220px;
  }
}
.eshop-login-form-topic {
  font-weight: 800;
  display: block;
  font-size: 26px;
}

.eshop-btn-login {
  width: 100%;
}
</style>
