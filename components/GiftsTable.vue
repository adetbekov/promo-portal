<i18n>
{
    "ru": {
        "date": "Дата розыгрыша",
        "phone": "Номер телефона",
        "gift": "Подарок",
        "rating": "Рейтинг",
        "next": "След.>",
        "prev": "&lt;Пред."
    },
    "kz": {
        "date": "Дата розыгрыша",
        "phone": "Номер телефона",
        "gift": "Подарок",
        "rating": "Рейтинг",
        "next": "Келесі>",
        "prev": "&lt;Артқа"
    }
}
</i18n>    

<template>
<div>
    <no-ssr placeholder="giftstable">
    <pulse-loader :loading="loading" :width="'100%'" color="white"></pulse-loader>
    <div v-if="!loading">
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
        <!-- <el-table-column
        prop="rating"
        :label='$t("rating").toUpperCase()'
        align="center">
        </el-table-column> -->
    </el-table>
    <Paginate
            v-model="page"
            :page-count="total_page_count"
            :click-handler="clickCallback"
            :prev-text="$t('prev')"
            :next-text="$t('next')"
            :container-class="'pagination-class'"
            :page-class="'pagination-page-class'"
            :hide-prev-next="true"
            prev-class="prev-class"
            next-class="next-class"
    ></Paginate>
  </div>
  </no-ssr>
</div>
</template>

<script>
import moment from "moment"
import 'element-ui/lib/theme-chalk/index.css'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    components: {
        PulseLoader
    },
    data() {
        return {
            page: 1,
            rating: [],
            pagination: [],
            loading: true
        }
    },
    props: [
        "rating_link"
    ],
    mounted() {
        this.load_rating()
    },
    watch:{
        page: function (newPage, oldPage) {
            this.loading = true
            this.load_rating()
        }
    },
    methods: {
        load_rating() {
            this.loading = true
            this.$axios.get(
                `${ this.rating_link }?page=${ this.page }&pageSize=5`
            ).then(response => {
                this.rating = response.data.data
                this.pagination = response.data.pagination
                this.loading = false
            })
        },
        formatter_ut(cell){
            return moment.unix(cell).format("DD.MM.YYYY")
        },
        tableRowStyle({ row, rowIndex }) {
            return ""
        },
        clickCallback(pageNum) {
            console.log(pageNum)
        }
    },
    computed: {
        total_page_count() {
            return this.pagination ? this.pagination.total_page_count : null
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
    border-radius: 5px 5px 0 0

</style>

<style lang="sass">
.pagination-class 
    list-style: none
    background-color: white
    border-radius: 0 0 5px 5px 
    color: $color-green-primary-dark
    width: 100%
    padding: 5px 0
    text-align: center
    li
        display: inline-block
.pagination-page-class
    color: $color-green-primary-dark
    margin-right: 8px
    padding: 0 5px
.active
    background-color: $color-green-primary-dark
    color: white
.prev-class
    padding-right: 20px
.next-class
    margin-left: 20px    
</style>
