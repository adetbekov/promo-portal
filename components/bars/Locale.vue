<template lang="pug">
  section(id="locales")
    nuxt-link(v-for="(locale, index) in $i18n.locales",
      v-if="locale.code !== $i18n.locale",
      :key="index",
      :exact="true",
      :to="switchLocalePath(locale.code)") {{ locale.name }}
</template>

<style lang="sass" scoped>
  #locales
    * 
      display: inline-block
      user-select: none
      padding: 0 5px
      margin: 0
</style>
