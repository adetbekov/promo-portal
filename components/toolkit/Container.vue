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
  margin-right: auto
  margin-left: auto
  width: 80%
  height: 100%

  &.mobile
    width: 100%
  
  &.tablet
    width: 90%
  
  &.laptop
    width: 85%
  
</style>

