<i18n>
{
    "ru": {
        "balance": "{codes} кодов",
        "current_balance": "Текущий баланс",
        "overall": "Всего собрано",
        "take_prizes": "Получить подарки",
        "archive": "Архив подарков",
        "first_block_title": "Обменивай коды на денежные подарки",
        "first_block_caption": "* МОЖНО НЕ СПИСЫВАТЬ КОДЫ И КОПИТЬ ДАЛЬШЕ",
        "code": "код",
        "enter_code": "ввести код"
    },
    "kz": {}
}
</i18n>    

<template lang="pug">
Container.cabinet
    br
    .info
        .balances 
            .first
                p {{ $t("balance", { codes: "75" }) }}
                p.little {{ $t("current_balance") }}
            div
                p {{ $t("balance", { codes: "176" }) }}
                p.little {{ $t("overall") }}
        .user-info(v-if="user")
            p {{ getUser.first_name }} {{ getUser.last_name }}
            p.little {{ getUser.email }}
            p.little {{ getUser.phone }}
    .code
        input(type="text", :placeholder="$t('code')", v-model="input_code", @keyup.13="register_code()")
        button(@click="register_code()") {{$t("enter_code")}}

    div.tabs
        n-link(:to="localePath('mycabinet')", class="left" exact) {{ $t("take_prizes") }}
        n-link(:to="localePath('mycabinet-archiveone')", class="center") {{ $t("archive") }}
        n-link(:to="localePath('mycabinet-archivetwo')" class="right") {{ $t("archive") }}
    nuxt-child(keep-alive)  
</template>

<script>
import Container from "~/components/toolkit/Container"
export default {
    middleware: "authenticated",
    data: () => ({
        input_code: null
    }),
    components: {
        Container
    },
    computed: {
        user(){
            return this.$store.getters["auth/getUser"]
        },
        getUser(){
            if (!this.user) {
                this.$store.dispatch('auth/set_user')
            }
            return this.user
        }
    },
    beforeMount(){
        if (!this.$store.getters["auth/getUser"]) {
            this.$store.dispatch('auth/set_user')
        }
    }
}
</script>


<style lang="sass" scoped>
.cabinet
    min-height: 100%
    color: $color-text-black
.default-layout
    background-color: blue!important

.info
    width: 100%
    display: flex
    justify-content: space-between

.balances
    display: flex
    justify-content: flex-start
    align-items: baseline

    >div
        padding-right: 40px
    
    .first
        color: #2E703A
    
    p
        text-transform: uppercase
        font-size: 22px
        padding: 0!important
        margin: 0!important
    
    .little
        font-size: 14px
        text-transform: none
        // margin-top: -10px!important
.user-info
    text-align: right
    p
        text-transform: uppercase
        font-size: 22px
        padding: 0!important
        margin: 0!important
    .little
        font-size: 14px
        text-transform: none
        color: #818181
.code
    margin-top: 10px
</style>

<style lang="sass" scoped>
input
  border: none
  font-family: "Ropa Sans", Roboto, sans-serif !important
  border-radius: 10px
  background-color: #F8F8F8
  border: 1px solid #C4C4C4
  padding: 10px 15px
  font-size: 16px
  width: 140px
  margin-bottom: 20px
  transition: ease-in-out, all .35s ease-in-out
  margin-right: 20px

  &:focus
    outline: none

button
  font-family: "Ropa Sans", Roboto, sans-serif !important
  font-size: 16px
  min-width: 180px
  padding: 10px 15px
  border-radius: 10px
  background-color: $color-red
  border: none 
  color: $color-text-white
  margin-bottom: 10px

  &:focus
    outline: none

  &:hover
    opacity: 0.9
</style>

<style lang="sass" scoped>
.tabs
    margin-top: 10px
    min-width: 100%
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center

    .left
        border-radius: 5px 0px 0px 5px
        z-index: 1

    .center
        border-radius: 0px
        z-index: 2
    
    .right
        border-radius: 0px 5px 5px 0px
        z-index: 1

    a
        width: 33.333333%!important
        align-self: auto
        display: block
        text-align: center
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3)
        font-weight: regular
        text-decoration: none
        transition: all 0.2s ease-in-out
        font-size: 18px
        color: $color-green-primary-dark
        padding: 10px 8px
        text-transform: uppercase
        background-color: $color-text-white

        &:hover
            text-decoration: underline

    .nuxt-link-active
        background: linear-gradient(180deg, #4F955D 0%, #086018 100%);
        color: $color-text-white
        z-index: 3
</style>
