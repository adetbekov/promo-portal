<template lang="pug">
ssr-loading(v-cloak)
  .default-layout
      section
        .navbar
          Container.container
            Navbar
        nuxt.content
</template>


<script>
import Navbar from '~/components/bars/Navbar'
import SSRLoading from "~/components/toolkit/SSRLoading"
import Container from "~/components/toolkit/Container"

export default {
  components: {
    SsrLoading: SSRLoading,
    Container: Container,
    Navbar: Navbar
  }
}
</script>


<style lang="sass">
@import "assets/styles/fonts/ropa-sans.sass"

.default-layout
  font-family: "Ropa Sans", Roboto, sans-serif !important
  font-weight: regular
  font-size: 22px
  color: $color-text-white
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
    background-color: $color-green-primary
    box-sizing: border-box
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    border-radius: 0 0 15px 15px  

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
