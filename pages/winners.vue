<i18n>
{
    "ru": {
        "winners": "Победители",
        "main": "Розыгрыш главных призов",
        "guaranteed": "Гарантированные денежные подарки",
        "certificates": "Розыгрыш сертификатов"
    },
    "kz": {
        "winners": "Женімпаздар"
    }
}
</i18n>

<template lang="pug">
    div.centered
        h1 {{ $t("winners").toUpperCase() }}
        div.tabs
            n-link(:to="localePath('winners-guaranteed')", class="left") {{ $t("guaranteed") }}
            n-link(:to="localePath('winners')", class="center" exact) {{ $t("certificates") }}
            n-link(:to="localePath('winners-main')" class="right") {{ $t("main") }}
        nuxt-child(keep-alive)  

</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.centered
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%

    h1
        font-size: 42px
        padding-top: 20px

    .tabs
        max-width: 600px
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center

        .left
            border-radius: 5px 0px 0px 5px
            z-index: 1

        .center
            border-radius: 0px
            z-index: 2
        
        .right
            border-radius: 0px 5px 5px 0px
            z-index: 1

        a
            width: 33.333333%!important
            align-self: auto
            display: block
            text-align: center
            box-shadow: 0px 5px 10px rgba(5, 73, 20, 0.62)
            font-weight: regular
            text-decoration: none
            transition: all 0.2s ease-in-out
            font-size: 18px
            color: $color-green-primary-dark
            padding: 10px 8px
            text-transform: uppercase
            background-color: $color-text-white

            &:hover
                text-decoration: underline

        .nuxt-link-active
            background-color: $color-red
            color: $color-text-white
            z-index: 3
            

</style>

