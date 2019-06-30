<template lang="pug">
  div
    input(type="phone", :placeholder="$t('phone')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="phone", @keyup.13="login()", autofocus)
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
        .post(`${this.$store.state.authURL}/rest-auth/login/`, {
          username: this.phone,
          password: this.password
        }).then(
          response => {
            console.log(response.data)
            this.$store.dispatch("auth/set", response.data.token)
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
