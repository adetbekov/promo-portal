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


<style lang="sass" scoped>

.disclaimer-layout
  font-weight: regular
  height: 100vh!important
  color: $color-text-black
  padding: 0
  margin: 0
  height: 100%
  display: flex
  align-items: stretch

  .content
    width: 100%
    height: 100%

</style>

<style>
  [v-cloak] {
    display: none;
  }

</style>
