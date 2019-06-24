<template lang="pug">
  div
    input(type="username", :placeholder="$t('phone')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="phone", @keyup.13="login()", autofocus)
    input(type="password", :placeholder="$t('phone')", v-model="password", @keyup.13="login()")
    button(@click="login()") Login
</template>

<script>
export default {
  middleware: "notAuthenticated",
  data: () => ({
    phone: "",
    password: ""
  }),
  methods: {
    login() {
      this.$axios
        .post(`r/users/${ this.phone }/signin`, {
          promo_language: this.$i18n.locale,
          user_password: this.password,
          promo_app_type: "web"
        }).then(
          response => {
            console.log(response.data)
            this.$store.dispatch("auth/set", response.data.authToken)
            // this.$router.push("/")
            this.password = ""
          },
          response => {
            console.log(response)
            // this.shakeAnimation(this.$refs.login)
          }
        )
    }
  }
}
</script>
