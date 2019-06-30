<i18n>
{
    "ru": {
        "date": "Дата розыгрыша",
        "phone": "Номер телефона",
        "gift": "Подарок",
        "rating": "Рейтинг"
    },
    "kz": {
        "date": "Дата розыгрыша",
        "phone": "Номер телефона",
        "gift": "Подарок",
        "rating": "Рейтинг"
    }
}
</i18n>    

<template>
<div>
    <el-table
    :data="rating"
    border
    class="table"
    :row-style="tableRowStyle">
    <el-table-column
      prop="promo_ut"
      :label='$t("date").toUpperCase()'
      align="center"
      :formatter="(row, col, cell, index) => this.formatter_ut(cell)">
    </el-table-column>
    <el-table-column
      prop="user_phone"
      :label='$t("phone").toUpperCase()'
      align="center">
    </el-table-column>
    <el-table-column
      prop="prize_name"
      :label='$t("gift").toUpperCase()'
      align="center">
    </el-table-column>
    <el-table-column
      prop="rating"
      :label='$t("rating").toUpperCase()'
      align="center">
    </el-table-column>
  </el-table>
  <p>{{rating_}}</p>
</div>
</template>

<script>
import moment from "moment"
import 'element-ui/lib/theme-chalk/index.css'
  export default {
    data() {
        return {
            rating: [
                {
                    "promo_ut": "1521518400",
                    "user_phone": "770136xxx26",
                    "prize_name": "Сертификат на 15000 тг",
                    "prize_id": "319",
                    "user_firstname": "Ildar",
                    "user_lastname": "",
                    "user_fullname": "Ildar ",
                    "user_city": "Almaty"
                },
                {
                    "promo_ut": "1521518400",
                    "user_phone": "770136xxx26",
                    "prize_name": "Сертификат на 5000 тг",
                    "prize_id": "316",
                    "user_firstname": "Ildar",
                    "user_lastname": "",
                    "user_fullname": "Ildar ",
                    "user_city": "Almaty"
                },
                {
                    "promo_ut": "1519876800",
                    "user_phone": "770148xxx85",
                    "prize_name": "Сертификат на 5000 тг",
                    "prize_id": "316",
                    "user_firstname": "Kostya",
                    "user_lastname": "",
                    "user_fullname": "Kostya ",
                    "user_city": "Абай"
                },
                {
                    "promo_ut": "1519876800",
                    "user_phone": "770148xxx85",
                    "prize_name": "Сертификат на 15000 тг",
                    "prize_id": "319",
                    "user_firstname": "Kostya",
                    "user_lastname": "",
                    "user_fullname": "Kostya ",
                    "user_city": "Абай"
                },
                {
                    "promo_ut": "1519876800",
                    "user_phone": "770162xxx02",
                    "prize_name": "Сертификат на 5000 тг",
                    "prize_id": "316",
                    "user_firstname": "MAsha",
                    "user_lastname": "",
                    "user_fullname": "MAsha ",
                    "user_city": "Алматы"
                }

            ],
            rating_: []
        }
    },
    mounted() {
        this.$axios.get('r/info/winners/list?page=1&pageSize=10').then(response => {
            this.rating_ = response.data
        })
    },
    methods: {
        formatter_ut(cell){
            return moment.unix(cell).format("DD.MM.YYYY")
        },
        tableRowStyle({ row, rowIndex }) {
            return ""
        },
    }
  }
</script>

<style lang="sass" scoped>
.table
    font-size: 14px
    background-color: $color-text-white
    min-width: 700px
    color: $color-green-primary-dark
    text-align: center
    border-radius: 5px

</style>
