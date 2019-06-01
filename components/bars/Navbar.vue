<i18n>
{
	"en": {
    "rules": "Rules of participation",
    "gifts": "Prizes",
    "rating": "Winners rating",
    "cabinet": "Personal Area",
    "hotline": "Hotline"
	},
	"ru": {
    "rules": "Правила участия",
    "gifts": "Призы",
    "rating": "Рейтинг победителей",
    "cabinet": "Личный кабинет",
    "hotline": "Горячая линия"
	},
	"kz": {
    "rules": "Қатысу ережелері",
    "gifts": "Сыйлықтар",
    "rating": "Жеңімпаздар рейтингі",
    "cabinet": "Жеке кабинет",
    "hotline": "Телефон"
	}
}
</i18n>

<template lang="pug">
    ul.menu
        li.logo
            Logo
        li.links
            n-link(:to="localePath('rules')") {{ $t("rules") }}
            n-link(:to="localePath('gifts')") {{ $t("gifts") }}
            n-link(:to="localePath('rating')") {{ $t("rating") }}
            n-link(:to="localePath('cabinet')") {{ $t("cabinet") }}
            Locale.locale
        li.number
            span {{ $t("hotline") }}
            p 8 800 070 1971
</template>

<script>
import Logo from "~/components/bars/Logo"
import Locale from "~/components/bars/Locale"

export default {
  components: {
    Logo,
    Locale
  }
}
</script>

<style lang="sass" scoped>
.menu
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  list-style: none
  font-size: 20px
  margin: 0
  padding: 0

  .links
    padding: 0 20px

  a
    font-weight: regular
    text-decoration: none
    color: $color-text-black
    padding: 0 20px 0 0
    transition: all 0.2s ease-in-out

    &:hover
      color: $color-red
  
  .number
    min-width: 120px
    display: flex
    flex-direction: column
    justify-content: between
    color: $color-text-black
    text-align: right

    span
      font-size: 18px

    p
      padding: 0
      margin: 0
      font-weight: bold
      font-size: 24px
  

</style>
