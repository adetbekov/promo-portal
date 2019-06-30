<template lang="pug">
div
    br
    mq-layout(mq="laptop+")
    div.prize-container
        PrizeCard(v-for="prize in prizes", :key="prize.id", :codeAmount="prize.codeAmount", :prizePrice="prize.prizePrice")
</template>

<script>

import Container from "~/components/toolkit/Container";
import PrizeCard from "~/components/PrizeCard";
import axios from "axios";

export default {
  components: {
    Container,
    PrizeCard
  },
  data: () => ({
    prizes: [
      {
        codeAmount: "20",
        prizePrice: "2000"
      },
      {
        codeAmount: "50",
        prizePrice: "5000"
      },
      {
        codeAmount: "150",
        prizePrice: "20000"
      },
      {
        codeAmount: "200",
        prizePrice: "90000"
      }
    ]
  })
};
</script>
<style lang="sass" scoped>
.container
  width: 70%
.prize-container
  display: flex;
  flex-direction: row;
  justify-content: space-between
</style>
