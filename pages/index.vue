<i18n>
{
	"en": {
                "countdown-head": "До старта проекта осталось",
                "countdown": "{days} дней {hours} часов {minutes} минут"
	},
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
        p {{ $t("countdown-head") }}
        p {{ $t("countdown", { days: 20, hours: 12, minutes: 10 }) }}
</template>

<script>
export default {
    layout: "initial"
}
</script>

<style lang="sass" scoped>
 
</style>
