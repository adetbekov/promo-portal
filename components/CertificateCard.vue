<template lang="pug">
  div.card
    img.magnum-logo(src="~assets/images/magnum-logo.png", alt="alt")
    p.card-heading Сертификат на сумму
    p.card-amount {{this.amount}} тг
    p.card-time Розыгрыш проходит<br/> каждый день в 00:00
</template>
<script>
export default {
  props: [
    'amount'
  ]
}
</script>
<style lang="sass" scoped>
  .card
    width: 200px;
    height: 144px;
    background: radial-gradient(72.00px at 50% 50%, #C81D2C 0%, #86080A 100%);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  .magnum-logo
    width: 106px;
    height: auto;
  .card-heading
    font-size: 14px;
    line-height: 14px;
    color: $color-text-white;
    margin-top: 8px;
  .card-amount
    font-size: 42px;
    line-height: 55px;
    text-transform: uppercase;
    color: $color-text-white;
  .card-time
    font-size: 10px;
    line-height: 14px;
    color: $color-text-yellow;
</style>
