// <template lang="jade">
//   BlurShadow
//     .logo
//       img(:src="getLogoImage", :alt="getLogoAlt", :height="getLogoHeight")
//       template(v-if="getLogoText")
//         img(:src="getLogoText", :alt="getLogoAlt+'-text'", :height="getLogoHeight", class="hidden-xs-only")
//       //- h1 Adetbekov
// </template>

// <script>
// import BlurShadow from "~/components/additional/BlurShadow"

// export default {
//   components: {
//     BlurShadow
//   },
//   props: {
//     logo: {
//       type: String,
//       default: "acs"
//     }
//   },
//   data: () => ({
//     logos: {
//       acs: {
//         img: "acs-logo.svg",
//         text: "acs-logo-text.svg",
//         alt: "ACS",
//         height: 40,
//         url: "/"
//       },
//       webcampus: {
//         img: "webcampus-logo.svg",
//         text: "webcampus-logo-text.svg",
//         alt: "WebCampus",
//         height: 30,
//         url: "/webcampus"
//       },
//       bcs: {
//         img: "bcs-logo.svg",
//         alt: "BCS",
//         height: 60,
//         url: "/"
//       }
//     }
//   }),
//   computed: {
//     l() {
//       return this.logos[this.logo]
//     },
//     getLogoImage() {
//       return require("~/assets/images/" + this.l.img)
//     },
//     getLogoText() {
//       try {
//         return require("~/assets/images/" + this.l.text)
//       } catch (err) {
//         return false
//       }
//     },
//     getLogoAlt() {
//       return this.l.alt
//     },
//     getLogoHeight() {
//       return this.l.height
//     },
//     getLogoUrl() {
//       return this.l.url
//     }
//   }
// }
// </script>

// <style lang="sass" scoped>
// @import "~/assets/styles/fonts/proxima-nova.sass"

// .logo 
//   display: flex
//   justify-content: start
//   align-items: center

// img:first-child 
//   margin-right: 5px

// h1
//   // font-family: 'Proxima Nova Bold'
//   font-size: 16px
//   font-weight: bold
//   vertical-align: baseline
//   letter-spacing: 2px
  
// </style>
