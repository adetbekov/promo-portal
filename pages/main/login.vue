<i18n>
{
  "ru": {
    "phone": "телефон",
    "password": "пароль",
    "login": "войти",
    "forgot": "Забыли пароль?"
  },
  "kz": {
    "phone": "телефон",
    "password": "құпиясөз",
    "login": "кіру",
    "forgot": "Забыли пароль?"
  }
}
</i18n>

<template lang="pug">
  modal
    div(slot="header")
      span Авторизация
    div(slot="body")
      input(type="phone", :placeholder="$t('phone')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="phone", @keyup.13.prevent="login()", v-mask="'+9 999 999 9999'", autofocus)
      input(type="password", :placeholder="$t('password')", v-model="password", @keyup.13.prevent="login()")
      button(@click.prevent="login()") {{$t("login")}}
      br
      n-link(:to="localePath('forgot')" id="forgot") {{ $t("forgot") }}
    div(slot="footer", class="footer-gray")
      p Впервые на сайте?
</template>

<script>
import modal from "~/components/toolkit/modal"
import { TweenMax, TimelineLite } from 'gsap'
import AwesomeMask from 'awesome-mask'
export default {
  middleware: "notAuthenticated",
  components: {
    modal,
    'mask': AwesomeMask
  },
  data: () => ({
    phone: "",
    password: ""
  }),
  methods: {
    shakeAnimation(element){
      TweenMax.to(element, .08, {
        x: -100,
        ease: Quad.easeInOut
      });
      TweenMax.to(element, .08, {
        repeat: 5,
        x: 120,
        yoyo: true,
        delay: .1,
        ease: Quad.easeInOut
      });
      TweenMax.to(element, .08, {
        x: 0,
        delay: .1 * 4
      });
    },
    login() {
      this.$axios
        .post(`${this.$store.state.authURL}/rest-auth/login/`, {
          username: this.phone,
          password: this.password
        }).then(
          response => {
            console.log(response.data)
            this.$store.dispatch("auth/set", response.data.token)
            this.$router.push("/mycabinet")
            this.password = ""
          },
          response => {
            console.log("hey you")
            this.shakeAnimation("#loginmodal")
          }
        )
    }
  }
}
</script>

<style lang="sass" scoped>
input
  border: none
  font-family: "Ropa Sans", Roboto, sans-serif !important
  border-radius: 10px
  background-color: #F8F8F8
  padding: 15px 20px
  font-size: 16px
  width: 100%
  margin-bottom: 20px
  transition: ease-in-out, all .35s ease-in-out

  &:focus
    outline: none

button
  font-family: "Ropa Sans", Roboto, sans-serif !important
  font-size: 16px
  min-width: 180px
  padding: 10px 15px
  border-radius: 20px
  background-color: $color-red
  border: none 
  color: $color-text-white
  margin-bottom: 10px

  &:focus
    outline: none

  &:hover
    opacity: 0.9

#forgot
  color: white
  font-size: 12px
  &:hover
    color: $color-text-yellow

.footer-gray
  background-color: #EFEFEF
  margin: 0

  p
    color: #808080
</style>

<style scoped>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #818181;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #818181;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #818181;
}
</style>
