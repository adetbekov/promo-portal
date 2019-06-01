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
ssr-loading(v-cloak)
  .default-layout
      section
        .navbar
          Container.container
            img(src="~assets/images/image.png", width=98, alt="Белый медведь")
            ul.menu
              li
                n-link(:to="localePath('rules')") {{ $t("rules") }}
                n-link(:to="localePath('gifts')") {{ $t("gifts") }}
                n-link(:to="localePath('rating')") {{ $t("rating") }}
                n-link(:to="localePath('cabinet')") {{ $t("cabinet") }}
                Locale
        nuxt.content
</template>


<script>
import Locale from '~/components/bars/Locale'
import SSRLoading from "~/components/toolkit/SSRLoading"
import Container from "~/components/toolkit/Container"

export default {
  components: {
    SsrLoading: SSRLoading,
    Container: Container,
    Locale: Locale
  }
}
</script>


<style lang="sass" scoped>
@import "assets/styles/fonts/bebas-neue.sass"

.default-layout
  font-family: "Bebas Neue", Roboto, sans-serif !important
  font-weight: regular
  font-size: 22px
  color: $color-text-black
  padding: 0
  margin: 0
  height: 100%
  display: flex
  align-items: stretch

section
  width: 100%
  max-height: 100vh

  .content
    overflow-y: auto

    
  .navbar
    width: 100%
    padding: 6px 0px
    margin: 0
    color: gray
    background-color: white
    box-sizing: border-box
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

    .container
      display: flex
      flex-direction: row
      justify-content: between

.menu
  display: flex
  flex-direction: column
  justify-content: center
  list-style: none
  a
    font-weight: regular
    text-decoration: none
    color: $color-text-black
    padding: 0 11px
    transition: all 0.2s ease-in-out

    &:hover
      color: $color-red
</style>

<style>
  [v-cloak] {
    display: none;
  }

</style>