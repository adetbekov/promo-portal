<i18n>
{
    "ru": {
        "promo_code": "Коды",
        "promo_datetime": "Дата и время",
        "promo_app_type": "Способ ввода",
        "response_text": "Статус"
    },
    "kz": {
        "promo_code": "Коды",
        "promo_datetime": "Дата и время",
        "promo_app_type": "Способ ввода",
        "response_text": "Статус"
    }
}
</i18n>    

<template>
<div>
    <el-table
    :data="codeHistory"
    border
    class="table"
    :row-style="tableRowStyle">
    <el-table-column
      prop="promo_code"
      :label='$t("promo_code").toUpperCase()'
      align="center">
    </el-table-column>
    <el-table-column
      prop="promo_datetime"
      :label='$t("promo_datetime").toUpperCase()'
      align="center">
    </el-table-column>
    <el-table-column
      prop="promo_app_type"
      :label='$t("promo_app_type").toUpperCase()'
      align="center">
    </el-table-column>
    <el-table-column
      prop="response_text"
      :label='$t("response_text").toUpperCase()'
      align="center">
    </el-table-column>
  </el-table>
  <!-- <p>{{ codeHistory }}</p> -->
</div>
</template>

<script>
import moment from "moment"
import 'element-ui/lib/theme-chalk/index.css'
  export default {
    data() {
        return {
            codeHistory: []
        }
    },
    mounted() {
        this.load_data()
    },
    methods: {
        tableRowStyle({ row, rowIndex }) {
            return ""
        },
        load_data(){
            new Promise(resolve=>{
                this.$store.dispatch('auth/set_user')
                console.log(this.$store.getters["auth/getUser"])
                resolve()
            })
            this.$axios.get(
                `/r/users/${this.user.phone}/codes/list?page=1&pageSize=10`
            ).then(response => {
                    this.codeHistory = response.data.data
                }
            )  
        }
    },
    computed:{
        user(){
            return this.$store.getters["auth/getUser"]
        },
        getUser(){
            if (!this.user) {
                this.$store.dispatch('auth/set_user')
            }
            return this.user
        }
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


