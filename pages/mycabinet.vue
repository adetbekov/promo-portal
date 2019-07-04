<i18n>
{
		"ru": {
				"balance": "{codes} кодов",
				"current_balance": "Текущий баланс",
				"overall": "Всего собрано",
				"take_prizes": "Получить подарки",
				"archivePrizes": "Архив подарков",
				"codeHistory": "Архив кодов",
				"first_block_title": "Обменивай коды на денежные подарки",
				"first_block_caption": "* МОЖНО НЕ СПИСЫВАТЬ КОДЫ И КОПИТЬ ДАЛЬШЕ",
				"code": "код",
				"enter_code": "ввести код"
		},
		"kz": {}
}
</i18n>    

<template lang="pug">
Container.cabinet
	br
	.info
		.balances 
			.first
				p {{ $t("balance", { codes: "75" }) }}
				p.little {{ $t("current_balance") }}
			div
				p {{ $t("balance", { codes: "176" }) }}
				p.little {{ $t("overall") }}
		.user-info(v-if="user")
			p {{ getUser.first_name }} {{ getUser.last_name }}
			p.little {{ getUser.email }}
			p.little {{ getUser.phone }}
	.code
		input(type="text", :placeholder="$t('code')", v-model="input_code", @keyup.13.prevent="register_code()")
		button.enter-code(@click.prevent="register_code()" :disabled="!this.code_is_valid") {{$t("enter_code")}}

	div.tabs
		n-link(:to="localePath('mycabinet')", class="left" exact) {{ $t("take_prizes") }}
		n-link(:to="localePath('mycabinet-archiveone')", class="center") {{ $t("archivePrizes") }}
		n-link(:to="localePath('mycabinet-codehistory')" class="right") {{ $t("codeHistory") }}
	nuxt-child(keep-alive)  
	modal(v-if="code_register_result_modal")
		div(slot="header")
			span.header-message {{ code_modal[0] }}
		div(slot="body")
			p.message {{ code_modal[1] }}
		div(slot="footer")
			button(@click="code_register_result_modal=false", class="modal-button green-modal") OK   
</template>

<script>
import Container from "~/components/toolkit/Container"
import modal from "~/components/toolkit/modal"

export default {
		middleware: "authenticated",
		data: () => ({
				input_code: null,
				code_reponse: null,
				code_register_result_modal: false
		}),
		components: {
				Container,
				modal
		},
		methods: {
				register_code(){
					if (this.code_is_valid){
						this.$axios.post(`/w/users/${this.getUser.phone}/codes/redeem`, {
							"transaction_id": require('uuid/v4'),
							"promo_code": this.input_code,
							"promo_app_type": "web",
							"user_phone": this.getUser.phone,
							"promo_language": this.$i18n.locale,
							"user_firstname": this.getUser.first_name,
							"user_lastname": this.getUser.last_name,
							"user_city": this.getUser.profile.city_name
						}).then(response => {
							this.code_reponse = response.data
							this.code_register_result_modal = true
							this.input_code = null
						})
					}
				}
		},
		computed: {
				code_modal(){
					if (this.code_reponse.code == 400){
						return _.split(this.code_reponse.message[0], ". ")
					} else if (this.code_reponse.code == 200){
						return _.split(this.code_reponse.message[0], "! ")
					}
					return null
				},
				code_is_valid(){
						return this.input_code && (this.input_code.length > 6)
				},
				user(){
						return this.$store.getters["auth/getUser"]
				},
				getUser(){
						if (!this.user) {
								this.$store.dispatch('auth/set_user')
						}
						return this.user
				}
		},
		beforeMount(){
				if (!this.$store.getters["auth/getUser"]) {
						this.$store.dispatch('auth/set_user')
				}
		}
}
</script>


<style lang="sass" scoped>
.cabinet
		min-height: 100%
		color: $color-text-black
.default-layout
		background-color: blue!important

.info
		width: 100%
		display: flex
		justify-content: space-between

.balances
		display: flex
		justify-content: flex-start
		align-items: baseline

		>div
				padding-right: 40px
		
		.first
				color: #2E703A
		
		p
				text-transform: uppercase
				font-size: 22px
				padding: 0!important
				margin: 0!important
		
		.little
				font-size: 14px
				text-transform: none
				// margin-top: -10px!important
.user-info
		text-align: right
		p
				text-transform: uppercase
				font-size: 22px
				padding: 0!important
				margin: 0!important
		.little
				font-size: 14px
				text-transform: none
				color: #818181
.code
		margin-top: 10px

</style>

<style lang="sass" scoped>
input
	border: none
	font-family: "Ropa Sans", Roboto, sans-serif !important
	border-radius: 10px
	background-color: #F8F8F8
	border: 1px solid #C4C4C4
	padding: 10px 15px
	font-size: 16px
	width: 140px
	margin-bottom: 20px
	transition: ease-in-out, all .35s ease-in-out
	margin-right: 20px

	&:focus
		outline: none

button.enter-code
	font-family: "Ropa Sans", Roboto, sans-serif !important
	font-size: 16px
	min-width: 180px
	padding: 10px 15px
	border-radius: 10px
	background-color: $color-red
	border: none 
	color: $color-text-white
	margin-bottom: 10px

	&:focus
		outline: none

	&:hover:not([disabled])
		opacity: 0.9
		
	&:disabled
		opacity: 0.7
		
</style>

<style lang="sass" scoped>
.tabs
		margin-top: 10px
		min-width: 100%
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
				box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3)
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
				background: linear-gradient(180deg, #4F955D 0%, #086018 100%);
				color: $color-text-white
				z-index: 3
</style>

<style lang="sass" scoped>
.modal-button
	font-family: "Ropa Sans", Roboto, sans-serif !important
	font-size: 16px
	min-width: 100px
	padding: 10px 15px
	border-radius: 30px
	border: none 
	color: white
	margin-bottom: 10px

.green-modal
	background: linear-gradient(180deg, #28C44A 0%, #1E652C 100%)!important

.message
	font-size: 14px

.header-message
	font-size: 24px

</style>
