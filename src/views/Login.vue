<template lang="pug">
section.login-page.pt-5
  form.form-signin.p-5.m-auto
    .text-center
      router-link(to="/")
        img.mb-2(src='/img/logo.png', alt='', width='72', height='72')
    h1.h3.mb-3.font-weight-normal Please sign in
    label.sr-only(for='inputEmail') Email address
    input#inputEmail.form-control(type='email', placeholder='Email address', required='', autofocus='')
    label.sr-only(for='inputPassword') Password
    input#inputPassword.form-control(type='password', placeholder='Password', required='')
    //-.checkbox.mb-3
      label
        input(type='checkbox', value='remember-me')
        |  Remember me
    button.mt-3.btn.btn-lg.btn-primary.btn-block(type='submit' @click="signIn") Sign in
    small: p.mt-2.text-muted 
      | Don't have an account 
      a(href="") click here
      | .


</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.$router.push("/members");
    }
  }
};
</script>
<style>
#app.login-page {
  background-color: black;
}
</style>
<style lang="scss" scoped>
.login-page {
  height: vh100;
  width: vw100;
}
.form-signin {
  max-width: 500px;
}

#inputEmail {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-width: 0;
}
#inputPassword {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
