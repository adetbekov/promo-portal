<template lang="pug">
  div.ssrloading
    slot(v-if="initialised")
</template>

<script>
export default {
  data() {
    return {
      initialised: false
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialised = true
  }
}
</script>

<style lang="sass" scoped>
.ssrloading
  display: block
</style>