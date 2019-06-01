<template lang="pug">
.container(:class="$mq")
  slot
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.container 
  padding-right: 143px
  padding-left: 143px
  margin-right: auto
  margin-left: auto
  width: 80%
  height: 100%

  &.mobile
    width: 95%
  
  &.tablet
    width: 90%
  
  &.laptop
    width: 85%
  
</style>

