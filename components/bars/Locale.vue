<template lang="pug">
  span(id="locales")
    n-link(v-for="(locale, index) in $i18n.locales",
      v-if="locale.code !== $i18n.locale",
      :key="index",
      :exact="true",
      :to="switchLocalePath(locale.code)") {{ locale.name }}
</template>

<style lang="sass" scoped>
  #locales
    a
      // display: inline-block
      text-transform: uppercase
      user-select: none
      margin: 0
      font-weight: regular
      text-decoration: none
      color: $color-text-white
      padding: 0 20px 0 0
      transition: all 0.2s ease-in-out

      &:hover
        text-decoration: underline

</style>
