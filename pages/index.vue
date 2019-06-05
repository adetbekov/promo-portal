<i18n>
{
    "ru": {
        "countdown-head": "До старта проекта осталось",
        "countdown": "{days} дней {hours} часов {minutes} минут"
    },
    "kz": {
        "countdown-head": "До старта проекта осталось",
        "countdown": "{days} дней {hours} часов {minutes} минут"
	}
}
</i18n>


<template lang="pug">
    div
        h1 {{ $t("countdown-head") }}
        countdown(:time="getDiff").box
            template(slot-scope="props") {{ $t("countdown", { days: props.days, hours: props.hours, minutes: props.minutes }) }}
</template>


<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
import { mapGetters } from 'vuex'

export default {
    layout: "initial",
    middleware: "notLaunched",
    components: {
        countdown: VueCountdown
    },
    computed: {
        ...mapGetters({
            getDiff: "countdown/getCountdown"
        })
    }
}
</script>

<style lang="sass" scoped>
    div 
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

    h1
        font-size: 80px
        padding: 0
        margin: 0 0 20px

    .box
        font-size: 60px
        font-weight: 100
        color: $color-text-white
        background-color: $color-red
        border-radius: 20px
        padding: 20px 20px 10px
</style>

