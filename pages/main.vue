<template lang="pug">
  Container
    p hey
    //- p {{ auth }}
</template>

<script>
import Container from '~/components/toolkit/Container'
import axios from "axios"

export default {
  components: {
    Container
  },
  async data () {
    let { data } = await axios.get(`http://worldclockapi.com/api/json/est/now`)
    return { auth: data }
  }
}
</script>

<style scoped>

</style>

