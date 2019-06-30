<template lang="pug">
  div.card
    div.card-header
      img.coin(src="~assets/images/coin.png", alt="alt")
    div.card-body
      p.give СПИСАТЬ <span>{{this.codeAmount}} КОДОВ</span> И ПОЛУЧИТЬ:
      p.get {{this.prizePrice}} тг
      p.to На баланс номера или <br/> Qiwi кошелек
    div.card-footer
      button.balance Баланс
      button.qiwi Qiwi
</template>
<script>
export default {
  props: [
    'codeAmount',
    'prizePrice'
  ]
}
</script>
<style lang="sass" scoped>
  .card
    background: #2E703A;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 200px;
    height: 130px;
    display: inline-flex;
    flex-direction: column;
    margin: 20px 0;
  .card-header
    display: flex;
    justify-content: center;
    margin-top: -21px;
  .card-body
    display: flex;
    flex-direction: column;
    align-items: center;
  .coin
    width: 42px;
    height: 42px;
  .give
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: $color-text-white;
    margin-top: 7px;
    span
      color: $color-text-yellow
  .get
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: $color-text-white;
  .to
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: $color-text-white;
  .card-footer
    display: flex;
    justify-content: space-around;
  .balance
    width: 73px;
    height: 30px;
    background: linear-gradient(180deg, #7A64FF 0%, #6D30C6 100%);
    border-radius: 100px;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: $color-text-white;
  .qiwi
    width: 73px;
    height: 30px;
    background: linear-gradient(180deg, #F09135 0%, #AC5F14 100%);
    border-radius: 100px;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: $color-text-white;
</style>
