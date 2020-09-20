<template>
  <div class="RegisterForm">
    <p>User Name</p>
    <input v-model="register.username" id="input1" />
    <p>Password</p>
    <input v-model="register.password" type="password" />
    <p v-show="!register.passValidLength" class="passValidationError">Password must be 6 digits or more</p>
    <p v-show="!register.passValidDigits" class="passValidationError">Password must contain a number</p>
    <p v-show="!register.passValidCapital" class="passValidationError">Password must contain uppercase and lowercase letters</p>
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
        userValid: false,
        passValidLength: false,
        passValidDigits: false,
        passValidCapital: false,
      },
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser: function() {
      if (this.register.passValidLength == true && this.register.passValidDigits == true && this.register.passValidCapital == true) {
        if (this.register.userValid == true) {
          alert("Register Succesfull");
        } else {
          alert("Username must not be empty and must contain more than 6 letters");
        }
      } else {
        alert("Register Has Failed");
      }
    },
  },
  watch: {
    "register.password": function(password) {
      this.register.passValidLength = formValidation.passLength(password);
      this.register.passValidDigits = formValidation.passNumber(password);
      this.register.passValidCapital = formValidation.passCapital(password);
    },
    "register.username": function(username) {
      this.register.userValid = formValidation.userValid(username);
    },
  },
};
</script>

<style lang="scss" scoped>
.RegisterForm {
  text-align: center;
  margin: auto;

  .passValidationError {
    color: red;
  }

  button {
    display: block;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
