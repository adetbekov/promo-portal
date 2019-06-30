<i18n>
{
	"ru": {
    "rules": "Правила участия",
    "gifts": "Призы",
    "rating": "Победители",
    "cabinet": "Личный кабинет",
    "hotline": "Горячая линия"
	},
	"kz": {
    "rules": "Қатысу ережелері",
    "gifts": "Сыйлықтар",
    "rating": "Жеңімпаздар",
    "cabinet": "Жеке кабинет",
    "hotline": "Телефон"
	}
}
</i18n>

<template lang="pug">
div.cont
  ul.menu.big
    li.logo
        Logo
    mq-layout(mq="tablet+").links.scroll
        n-link(:to="localePath('main')") {{ $t("rules") }}
        n-link(:to="localePath('main')") {{ $t("gifts") }}
        n-link(:to="localePath('winners')") {{ $t("rating") }}
        n-link(:to="localePath('mycabinet')") {{ $t("cabinet") }}
        Locale.locale
    mq-layout(mq="laptop+").number
        span {{ $t("hotline") }}
        p 8 800 070 1971
  mq-layout(:mq="['mobile']").menu.small
    li.links.scroll.mobile
      n-link(:to="localePath('main')") {{ $t("rules") }}
      n-link(:to="localePath('main')") {{ $t("gifts") }}
      n-link(:to="localePath('winners')") {{ $t("rating") }}
      n-link(:to="localePath('mycabinet')") {{ $t("cabinet") }}
      Locale.locale
</template>

<script>
import Logo from "~/components/bars/Logo"
import Locale from "~/components/bars/Locale"

export default {
  components: {
    Logo,
    Locale
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile' 
    }
  },
}
</script>

<style lang="sass" scoped>
.cont
  width: 100%
.menu
  max-width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  list-style: none
  font-size: 20px
  margin: 0
  padding: 0

  &.big
    @include screen(mobile)
      padding: 10px

  .links
    padding: 0 20px

  a
    text-transform: uppercase
    font-weight: regular
    text-decoration: none
    color: $color-text-white
    padding: 0 20px 0 0
    transition: all 0.2s ease-in-out

    &:hover
      text-decoration: underline

  .nuxt-link-active
    color: $color-text-yellow
  
  .number
    min-width: 120px
    display: flex
    flex-direction: column
    justify-content: between
    color: $color-text-white
    text-align: right

    span
      font-size: 18px

    p
      padding: 0
      margin: 0
      font-weight: bold
      font-size: 24px

.scroll.mobile.links
  padding: 0 0 0 10px!important

.menu.small
  margin-top: 10px
</style>

<style>
.scroll {
  /* padding: 0!important; */
  white-space: nowrap; /* [1] */
  overflow-x: auto; /* [2] */
  -webkit-overflow-scrolling: touch; /* [3] */
  -ms-overflow-style: -ms-autohiding-scrollbar; /* [4] */ }

/* [5] */
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
