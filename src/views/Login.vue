<template lang="pug">
section.login-page.pt-5
  form.form-signin.p-5.m-auto(@submit.prevent="signIn")
    .text-center
      router-link(to="/")
        img.mb-2(src='/img/logo.png' alt='' width='72' height='72')
    h1.h3.mb-3.font-weight-normal Please sign in
    label.sr-only(for='inputEmail') Email address
    input#inputEmail.form-control(type='email' placeholder='Email address' required='' autofocus='' v-model="email")
    label.sr-only(for='inputPassword') Password
    input#inputPassword.form-control(type='password' placeholder='Password' required='' v-model="pass")
    //-.checkbox.mb-3
      label
        input(type='checkbox' value='remember-me')
        |  Remember me
    button.mt-3.btn.btn-lg.btn-primary.btn-block(type='submit') Sign in
    p.error.text-danger(v-if="error") Bad login information
    small: p.mt-2.text-muted 
      | Don't have an account 
      a(href="") click here
      | .

    hr
    ul

      li: a(href="" @click.prevent="email = 'customer@example.com'") customer - passengers
      li: a(href="" @click.prevent="email = 'client@example.com'") client - plane owners / business
      li: a(href="" @click.prevent="email = 'admin@example.com'") admin - site admin


</template>

<script>
import auth from "../auth";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "joe@example.com",
      pass: "password1",
      error: false
    };
  },
  methods: {
    async signIn() {
      this.error = false;
      try {
        const loggedIn = await auth.login(this.email, this.pass);
        console.log(loggedIn);
        if (loggedIn) {
          this.$router.replace(this.$route.query.redirect || "/handler");
          return;
        }
        this.error = true;
      } catch (err) {
        this.error = err;
      }
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
