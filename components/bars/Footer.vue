<template lang="pug">
footer.footer
	div.footer-left
		img(src="~assets/images/bm-logo.svg", alt="alt", class="bm-logo")
		ul
			li Правила участия
			li Личный кабинет
			li Победители
			li Подарки
		div.contacts-container
			img(src="~/assets/images/call-center-logo.svg", alt="alt", class="call-center-logo")
			p.contacts <span class="hotline">Горячая линия</span> 8 800 070 1971 <br>РК, Алматы, 05000, улица 26, дом 26
		p.period-t Период проекта с 15 июля <br> по 15 сентября 2019 года
	div.footer-right
		p.period Период проекта с 15 июля <br> по 15 сентября 2019 года
</template>
<style lang="sass" scoped>
footer
	display: flex
	justify-content: space-between
	// position: absolute;
	// bottom: 0;
	width: 100%;
	height: 332px;
	background-color: #07330B;
	box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px 20px 0px 0px;
	padding: 39px 105px 165px 117px;
	.footer-left
		display: flex;
		.bm-logo
			height: 102px;
		h1
			color: gold
		ul
			list-style-type: none;
			padding: 0;
			margin: 0 0 0 78px; 
			font-size: 18px;
			line-height: 24px;
			width: 166px;
			height: 111px;
		.contacts-container
			display: flex;
			margin-left: 70px;
			.call-center-logo
				width: 33px;
				height: 33px;
			.contacts
				font-size: 18px;
				line-height: 24px;
				width: 257px;
				margin: 0 0 0 11px;
		.period-t
			display: none
	.period
		font-size: 16px;
		line-height: 21px;
		color: $color-text-yellow;
		padding: 0;
		margin: 0;
@include screen(mobile)
	footer
		flex-direction: column;
		padding: 35px 0 165px 24px;
		height: 480px;
		.period
			color: inherit
			font-size: 20px;
			line-height: 26px;
		.footer-left
			display: flex;
			flex-direction: column;
			margin-top: 39px;
			order: 1;
			.bm-logo
				display: none
			ul
				margin: 0
				width: 181px
			.contacts-container
				margin-top: 53px;
				margin-left: 0;
				.call-center-logo
					width: 21px;
					height: 21px;
				.contacts
					font-size: 12px;
					line-height: 14px;
					.hotline
						display: none
			.period-t
				display: none
@include screen(tablet)
	footer
		padding-left: 5%
		padding-right: 5%
		flex-wrap: wrap;
		.footer-left
			justify-content: space-between
			width: 100%;
			flex-wrap: wrap;
			ul
				margin-left: 0;
				font-size: 0.8em;
				line-height: 21px
				width: 50%;
			.contacts-container
				margin-left: 0%;
				margin-top: 50px;
				width: 50%
				.contacts
					width: auto;
					font-size: 0.45em
					line-height: 21px
					.hotline
						display: none;
			.period-t
				display: block
				width: 50%;
				margin-top: 50px !important;
				display: block
				font-size: 16px;
				line-height: 21px;
				color: $color-text-yellow;
				padding: 0;
				margin: 0;
		.footer-right
			width: 50%
		.period
			font-size: 0.8em
			display: none
@include screen(laptop)
	footer
		display: flex
		justify-content: space-between
		width: 100%;
		height: 332px;
		background-color: #07330B;
		box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
		border-radius: 20px 20px 0px 0px;
		padding: 39px 7.5% 165px 7.5%
		.footer-left
			display: flex;
			width: 75%;
			justify-content: space-between;
			.bm-logo
				height: 102px;
			h1
				color: gold
			ul
				list-style-type: none;
				padding: 0;
				margin: 0;
				margin-left: 5%;
				font-size: 18px;
				line-height: 24px;
				width: 166px;
				height: 111px;
			.contacts-container
				display: flex;
				margin-left: 0px;
				.call-center-logo
					width: 33px;
					height: 33px;
				.contacts
					font-size: 18px;
					line-height: 24px;
					width: 257px;
					margin: 0 0 0 11px;
				.period-t
					display: none
		.footer-right
			width: 25%;
			display: flex;
			justify-content: flex-end;

		.period
			font-size: 16px;
			line-height: 21px;
			color: $color-text-yellow;
			padding: 0;
			margin: 0;
</style>
<style scoped>
	div {
		
	}
</style>

