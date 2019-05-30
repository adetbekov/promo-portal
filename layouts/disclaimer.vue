<i18n>
{
	"en": {
    "search": "Search"
	},
	"ru": {
    "search": "Найти"
	},
	"kz": {
    "search": "Іздеу"
	}
}
</i18n>


<template lang="pug">
ssr-loading(v-cloak)
  .disclaimer-layout
    nuxt.content
</template>


<script>
// import Sidebar from '~/components/bars/Sidebar'
import SSRLoading from "~/components/toolkit/SSRLoading"

export default {
  components: {
    SsrLoading: SSRLoading
  }
}
</script>


<style lang="sass">
// @import "assets/styles/fonts/lato.sass"

.disclaimer-layout
  font-family: "Lato", Helvetica, sans-serif !important
  font-weight: 400
  color: #2c3e50
  padding: 0
  margin: 0
  height: 100%
  display: flex
  align-items: stretch

section
  width: 100%
  max-height: 100vh
  background-color: #fafafa

  .content
    overflow-y: auto

</style>

<style>
  [v-cloak] {
    display: none;
  }

</style>