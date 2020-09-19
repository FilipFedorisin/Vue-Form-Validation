<template>
  <div class="RegisterForm">
    <p>User Name</p>
    <input v-model="register.username" id="input1" />
    <p>Password</p>
    <input v-model="register.password" type="password" />
    <button v-on:click="registerUser">Register</button>

    <p>User Name</p>
    <input v-model="login.username" />
    <p>Password</p>
    <input v-model="login.password" type="password" />
    <button id="button2">Login</button>

    <button id="log">log users</button>
  </div>
</template>

<script>
import * as formValidation from "../assets/scripts/formValidation.js";

export default {
  name: "RegisterForm",
  data() {
    return {
      register: {
        username: "",
        password: "",
      },
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser: function () {
      formValidation.inputCheck(this.register.username, this.register.password);
      formValidation.testingHovno();
    },
  },
};
</script>

<style lang="scss" scoped>
.RegisterForm {
  text-align: center;
  margin: auto;

  button {
    display: block;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
