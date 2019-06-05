<template lang="pug">
ssr-loading(v-cloak)
  .default-layout
      section
        .navbar
          Container.container
            Navbar
        nuxt.content
        Footer
</template>


<script>
import Navbar from '~/components/bars/Navbar'
import Footer from '~/components/bars/Footer'
import SSRLoading from "~/components/toolkit/SSRLoading"
import Container from "~/components/toolkit/Container"

export default {
  components: {
    SsrLoading: SSRLoading,
    Container: Container,
    Navbar: Navbar,
    Footer: Footer
  }
}
</script>


<style lang="sass">
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
    padding: 3px 0px
    margin: 0
    color: gray
    background-color: white
    box-sizing: border-box
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

    .container
      display: flex
      flex-direction: row
      justify-content: between

</style>

<style>
  [v-cloak] {
    display: none;
  }
</style>
