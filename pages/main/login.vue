<i18n>
{
  "ru": {
    "phone": "телефон",
    "password": "пароль",
    "login": "войти",
    "forgot": "Забыли пароль?",
    "register": "Зарегистрироваться (1 минута)"
  },
  "kz": {
    "phone": "телефон",
    "password": "құпиясөз",
    "login": "кіру",
    "forgot": "Забыли пароль?",
    "register": "Зарегистрироваться (1 минута)"
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
      n-link(:to="localePath('main-register')" id="register") {{ $t("register") }}
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
  computed: {
    clean_phone(){
      let phone = this.phone
      phone = phone.replace(/\s/g, '')
      phone = phone.replace(/\+/g, '')
      return phone
    }
  },
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
          username: this.clean_phone,
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
  height: 100%
  width: calc(100% + 60px)
  margin-left: -30px
  height: 120px
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25)
  border-radius: 10px 10px 0px 0px
  padding: 24px 30px 40px

  p
    color: #808080

#register
  font-size: 14px
  line-height: 14px
  color: #C42D28
  text-decoration: none
  text-transform: none
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
