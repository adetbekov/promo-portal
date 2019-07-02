<template lang="pug">
ssr-loading(v-cloak)
  .default-layout(:class="{'cabinet-white' : isCabinet}")
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
import _ from "lodash"

export default {
  components: {
    SsrLoading: SSRLoading,
    Container: Container,
    Navbar: Navbar,
    Footer: Footer
  },
  computed:{
    isCabinet(){
      return  this.localePath("mycabinet") == `/${_.split(this.$nuxt.$route.path, '/')[1]}/`
    }
  }
}
</script>


<style lang="sass">
@import "assets/styles/fonts/ropa-sans.sass"

.default-layout
  font-family: "Ropa Sans", Roboto, sans-serif !important
  background: linear-gradient(180deg, #4F955D 0%, #086018 100%)
  background-repeat: no-repeat
  background-attachment: fixed
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

  .content
    padding-top: 110px
  .navbar
    width: 100%
    padding: 3px 0px
    margin: 0
    background-color: $color-green-primary
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    border-radius: 0 0 15px 15px  
    position: absolute
    top: 0

    .container
      display: flex
      flex-direction: row
      justify-content: between

.cabinet-white
  background: linear-gradient(180deg, #F8F8F8 0%, #DFDFDF 100%)
</style>

<style>
  [v-cloak] {
    display: none;
  }
</style>
