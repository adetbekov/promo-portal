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
  padding-right: 15px
  padding-left: 15px
  margin-right: auto
  margin-left: auto
  width: 80%

  &.mobile
    width: 95%
  
  &.tablet
    width: 90%
  
  &.laptop
    width: 85%
  
</style>

