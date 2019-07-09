<i18n>
{
  "ru": {
    "name": "Имя",
    "surname": "Фамилия",
    "city": "Город и Область",
    "phone": "Телефон",
    "email": "Почта",
    "password": "Пароль",
    "register": "Зарегистрироваться",
    "login": "Войти"
  },
  "kz": {
    "name": "Аты",
    "surname": "Тегі",
    "city": "Қала және Облыс",
    "phone": "Телефон",
    "email": "Пошта",
    "password": "Құпиясөз",
    "register": "Тіркелу",
    "login": "Кіру"
  }
}
</i18n>

<template lang="pug">
  modal
    div(slot="header")
      p Регистрация (1 минута)
      p.disclaimer Убедись, что все указанные данные достоверны. Иначе мы не сможем найти тебя и вручить подарок в случае выигрыша. Возможности редактировать данные не будет!
    div(slot="body")
      input(type="text", :placeholder="$t('name')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="name", @keyup.13="register()", autofocus)
      input(type="text", :placeholder="$t('surname')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="surname", @keyup.13="register()", autofocus)
      input#city-input(type="text", :placeholder="$t('city')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="city.rus", @keyup.13="register()", @click="showCities = !showCities" readonly, :class="{cityopen: showCities}")
      div.cities-list(v-show="showCities")
        div.city(v-for="city in cities", @click="selectCity(city)") {{city.rus}}
      input(type="text", :placeholder="$t('phone')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="phone", @keyup.13="register()" autofocus, v-mask="'+9 999 999 9999'")
      p.error(v-if="this.error.phone") {{error.phone}}
      input(type="text", :placeholder="$t('email')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="email", @keyup.13="register()", autofocus)
      p.error(v-if="this.error.email") {{error.email}}
      input(type="password", :placeholder="$t('password')", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="password", @keyup.13="register()", autofocus)
      p.error(v-if="this.error.password") {{error.password}}
      div.age-confirm-box
        div.age-confirm-radio
        div.age-confirm-text Я подтверждаю, что мне исполнился 21 год, и что я согласен с условиями проекта и с условиями предоставления персональных данных
      button(@click="register()") {{$t("register")}}
      br
    div(slot="footer", class="footer-gray")
      p Уже есть аккаунт?
      n-link(:to="localePath('main-login')" id="login") {{ $t("login") }}
</template>

<script>
import modal from "~/components/toolkit/modal"
import { TweenMax, TimelineLite } from 'gsap'
import AwesomeMask from 'awesome-mask'

export default {
  middleware: "notAuthenticated",
  components: {
    modal
  },
   directives: {
    'mask': AwesomeMask
  },
  data: () => ({
    name: "",
    surname: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    error: {},
    cities: [
      {eng: "Almaty", rus: "Алматы"},
      {eng: "Nur-Sultan", rus: "Нур-Султан"},
      {eng: "Karagandy", rus: "Караганда"},
      {eng: "Shymkent", rus: "Шымкент"},
      {eng: "Taldykorgan", rus: "Талдыкорган"},
      {eng: "Petropavl", rus: "Петропавловск"},
      {eng: "Kyzylorda", rus: "Кызылорда"}
    ],
    showCities: false
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
    register() {
      if (this.isValidForm()) {
        this.$axios
        .post(`${this.$store.state.authURL}/rest-auth/registration/`, {
          username: this.phone,
          email: this.email,
          password1: this.password,
          password2: this.password,
          city: this.city.eng,
          first_name: this.name,
          last_name: this.surname
        }).then(
          response => {
            this.$store.dispatch("auth/set", response.data.token)
            this.$router.push("/mycabinet")
            this.password = ""
          },
          error => {
            console.log("hey you")
            if (error.response.data.email) {
              this.error.password = error.response.data.email[0];
            }
            if (error.response.data.username) {
              this.error.phone = error.response.data.username[0];
            }
            if (error.response.data.password1) {
              this.error.password = error.response.data.password1[0];
            }
            this.shakeAnimation("#loginmodal")
            this.$forceUpdate();
          }
        )
      }
    },
    isValidForm: function () {
      this.error = {}

      if (!this.phone) {
        this.error.phone = 'Укажите номер телефона';
      } else if(!this.validPhone(this.phone)) {
        this.error.phone = 'Укажите корректный номер телефона.';
      }
      if (!this.email) {
        this.error.email = 'Укажите электронную почту.';
      } else if (!this.validEmail(this.email)) {
        this.error.email = 'Укажите корректный адрес электронной почты.';
      }

      if(!this.password) {
        this.error.password = 'Укажите пароль.';
      }

      if (this.isEmpty(this.error)) {
        return true;
      } else {
        this.shakeAnimation("#loginmodal")
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone: function(phone) {
      phone = phone.replace(/\s/g, '');
      phone = phone.replace(/\+/g, '');
      this.phone = phone;
      return phone.length === 11;
    },
    isEmpty: function(obj) {
      for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return JSON.stringify(obj) === JSON.stringify({});
    },
    selectCity: function(city) {
      this.city = city;
      this.showCities = false;
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
  text-transform: uppercase

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
  height: 100%;
  width: calc(100% + 60px);
  margin-left: -30px;
  height: 120px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;
  padding: 24px 30px 40px;

  p
    color: #808080
.disclaimer
  font-size: 14px;
  line-height: 14px;
  text-transform: none;
  margin-top: 17px;
.age-confirm-box
  display: flex;
  align-items: center;
  margin-bottom: 20px;
.age-confirm-radio
  width: 13px;
  min-width: 13px;
  height: 13px;
  background: #E5E5E5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  margin-right: 6px;
.age-confirm-text
  font-size: 8px;
  line-height: 14px;
  color: $color-text-white;
  opacity: 0.6;
  border-radius: 10px;
#login
  font-size: 14px;
  line-height: 14px;
  color: #C42D28;
  text-decoration: none;
  text-transform: none;
.error
  color: $color-red;
  font-size: 16px;
  margin-top: -15px;
  margin-bottom: 5px;
.cities-list
  padding: 15px 0;
  border-radius: 10px;
  background-color: #F8F8F8;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 16px;
  color: #000000;
  margin-top: -31px;
  margin-bottom: 20px;
  z-index: 2;
.city
  z-index: 2;
  cursor: pointer;
  padding: 0 20px;
.city:hover
  background-color: #ffffff;
#city-input
  // margin-bottom: 0;
.cityopen
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
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
