<template lang="pug">
Container
	mq-layout(mq="laptop+")
		div.main-banner
			div.main-banner-left
				img.deadlines(src="~assets/images/deadlines.png")
			div.main-banner-center
				div.main-banner-center-top
					button.code-enter
						span Введи код
					p.send-sms-text или отправь смс на номер 7102
					img.bm-flight(src="~assets/images/bm-flight.png", alt="И лети на юг")
				div.main-banner-center-bottom
					p.banner-description *регистрация кода даёт шанс стать счастливым обладателем поездки на двоих в Египет
			div.main-banner-right
				img.banner-laggage(src="~assets/images/main-banner-laggage.png")
				img.banner-bottle(src="~assets/images/main-banner-bottle.png")
				img.banner-can(src="~assets/images/main-banner-can.png")
		div.prizes
			div.case-1
				p.case-1-text <span>главный подарок:</span><br/> поездка в египет<br/> на двоих
				img.case-1-img(src="~assets/images/suitcase1.png")
			div.case-2
				p.case-2-text <span>еженедельные подарки:</span><br/> сертификаты на<br/> покупки в сети magnum<br/> и 4 iphone xs max
				img.case-2-img(src="~assets/images/suitcase2.png")
			div.about-prizes
				img(src="~assets/images/take-prize.png")
				p больше о подарках
			div.case-3
				p.case-3-text <span>ежедневные подарки:</span><br/> сертификаты<br/> на покупки <br/>в сети magnum
				img.case-3-img(src="~assets/images/suitcase3.png")
			div.case-4
				p.case-4-text <span>гарантированные подарки:</span><br/> баланс телефона<br/> или qiwi кошелЁк
				img.case-4-img(src="~assets/images/suitcase4.png")
		div.lenta
		div.rules-header
			img(src="~assets/images/animated-arrow-right.png")
			p правила участия в проекте
			img(src="~assets/images/animated-arrow-left.png")
		div.rules
			div.rule.rule-1
				div.rule-panel
					div.circle
						img.number(src="~assets/images/1.png")
					img.rules-icon-1(src="~assets/images/bm-light.png")
				p.rules-text покупай продукцию <br/>белый медведь <br/>в сети magnum
			div.rule.rule-2
				div.rule-panel
					div.circle
						img.number(src="~assets/images/2.png")
					img.rules-icon-2(src="~assets/images/rules-cheque.png")
				p.rules-text на кассе получай<br/> код в чеке за каждый<br/> приобретённый продукт
			div.rule.rule-3
				div.rule-panel
					div.circle
						img.number(src="~assets/images/3.png")
					img.rules-icon-3(src="~assets/images/rules-phone.png")
				p.rules-text копи и регистрируй<br/> коды на сайте или<br/> через sms на номер 7102
			div.rule.rule-4
				div.rule-panel
					div.circle
						img.number(src="~assets/images/4.png")
					img.rules-icon-4(src="~assets/images/rules-prize.png")
				p.rules-text принимай участие в получении<br/> гарантированных, ежедневных,<br/> и еженедельных подарков
		div.bears-carousel-header
			img(src="~assets/images/animated-arrow-right.png")
			p КУПИ любую продукцию Белый Медведь и ищи код в чеке
			img(src="~assets/images/animated-arrow-left.png")
		vue-glide
			vue-glide-slide
	nuxt-child(keep-alive)
</template>

<script>
import Container from "~/components/toolkit/Container";
import axios from "axios";
import { Glide, GlideSlide } from 'vue-glide-js';

export default {
  components: {
		Container,
		[Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  async data() {
    let { data } = await axios.get(`http://worldclockapi.com/api/json/est/now`);
    return { auth: data };
  }
};
</script>
<style lang="sass" scoped>
	.container
		width: 83.34%;
	.main-banner
		background: url("~assets/images/main-banner.png") no-repeat;
		width: 100%;
		height: 406px;
		background-size: 100% 102%;
		display: flex;
		margin-top: 107px;
		// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	.main-banner-center
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	.main-banner-center-top, .main-banner-center-bottom
		display: flex;
		flex-direction: column;
		align-items: center;
	.main-banner-right
		display: flex;
	.main-banner-left, .main-banner-right, .main-banner-center
		width: 33.33%
	.code-enter
		background-color: $color-red;
		padding: 17px 10px;
		border-radius: 20px;
		color: $color-text-white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		width: 180px;
		height: 60px;
		margin-top: 18px;
		span
			width: 160px;
			font-size: 26px;
			line-height: 40px;
			height: 26px;
			display: flex;
			align-items: center;
			justify-content: center;
	.send-sms-text
		color: $color-text-white;
		font-size: 22px;
		line-height: 25px;
		text-align: center;
		text-transform: uppercase;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin-top: 7px;
	.bm-flight
		max-width: 469px;
		height: auto;

	.banner-description
		color: $color-text-white;
		font-size: 14px;
		line-height: 14px;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		text-align: center;
		margin-bottom: 20px;
		position: relative;
		width: 349px;

	.banner-laggage
		width: 224px;
		max-width: 224px;
		height: 231px;
		position: relative;
		left: 36px;
		top: 204px;

	.banner-bottle
		width: 324px;
		height: 462px;
		position: relative;
		left: -155px;
		top: 30px;
		z-index: 1;
	.banner-can
		width: 188px;
		height: 317px;
		position: relative;
		top: 160px;
		left: -300px;
	.deadlines
		position: relative;
		max-width: 397px;
		top: 0px;
		left: 20px;
		height: auto;
		width: 100%;
	.prizes
		display: flex;
		margin-top: 31px;
		margin-top: 75px;
	.lenta
		background: url("~assets/images/lenta.png");
		width: 100%;
		height: 100px;
		background-size: 100% 100%;
		background-position: center;
		margin-top: -49px;
	.case-1, .case-2, .case-3, .case-4
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 280px;
	.case-1-text, .case-2-text, .case-3-text, .case-4-text
		font-size: 18px;
		line-height: 25px;
		text-align: center;
		text-transform: uppercase;
		spanf
			font-style: bold;
	.case-1
		margin-left: 43px;
		.case-1-text
			margin-left: -60px;
	.case-2
		margin-left: -115px;
	.case-3
		margin-left: -25px;
	.case-4
		margin-left: -70px;
	.case-1-img
		width: 311px;
		height: 176px;
	.case-2-img
		width: 287px;
		height: 176px;
	.case-3-img
		width: 319px;
		height: 176px;
	.case-4-img
		width: 298px;
		height: 176px;
		margin-left: -45px;
	.about-prizes
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: -25px;
		img
			width: 195px;
			height: 206px;
			margin-top: -30px;
		p 
			font-size: 22px;
			line-height: 25px;	
			text-align: center;
			text-decoration-line: underline;
			text-transform: uppercase;
	.rules-header
		display: flex;
		justify-content: center;
		margin-top: 169px;
		align-items: center;
		img
			width: 128px;
			height: 42px;
		p
			font-size: 42px;
			line-height: 55px;
			display: flex;
			align-items: center;
			text-align: center;
			text-transform: uppercase;
			color: $color-text-white;
			margin-right: 50px;
			margin-left: 50px;
	.rules
		display: flex;
		justify-content: space-between;
		height: 400px;
		margin-top: -25px;
	.rule-panel
		display: flex;
		align-items: flex-end;
	.circle
		background: url("~assets/images/green-circle.png") no-repeat;
		background-size: 100%;
		width: 83px;
		height: 83px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	.rules-text
		text-align: center;
		margin-top: 23px;
	.rule
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	.rules-icon-1
		width: 90px;
		height: 248px;
		margin-left: -20px;
	.rules-icon-2
		width: 258px;
		height: 217.87px;
		margin-left: -106px;
	.rules-icon-3
		width: 250.88px;
		height: 249.62px;
		margin-left: -75px;
	.rules-icon-4
		width: 306.41px;
		height: 288.12px;
		margin-left: -85px;
	.bears-carousel-header
		display: flex;
		justify-content: center;
		margin-top: 82px;
		// align-items: center;
		img
			width: 128px;
			height: 42px;
		p
			font-size: 40px;
			line-height: 53px;
			display: flex;
			align-items: center;
			text-align: center;
			text-transform: uppercase;
			color: $color-text-white;
			margin-right: 60px;
			margin-left: 60px;
</style>
