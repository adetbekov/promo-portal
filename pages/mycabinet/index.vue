<template lang="pug">
div
    br
    mq-layout(mq="laptop+")
    div.prize-container
        PrizeCard(v-for="prize in prizes", :key="prize.id", :codeAmount="prize.codeAmount", :prizePrice="prize.prizePrice")
    div.certificate-container
      CertificateCard(v-for="certificate in certificates", :key="certificate.id", :amount="certificate.amount")
</template>

<script>

import Container from "~/components/toolkit/Container";
import PrizeCard from "~/components/PrizeCard";
import CertificateCard from "~/components/CertificateCard";
import axios from "axios";

export default {
  components: {
    Container,
    PrizeCard,
    CertificateCard
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
    ],
    certificates: [
      {
        amount: "5000"
      },
      {
        amount: "10000"
      },
      {
        amount: "10000"
      },
      {
        amount: "30000"
      },
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
.certificate-container
  display: flex;
  flex-direction: row;
  justify-content: space-between
  margin: 30px 0;
</style>
