// <template lang="jade">
//   el-header(id="header")
//     .left
//       slot(name="left")
//         Logo(logo="acs")
//     .center
//       slot(name="center")
//     .righta
//       slot(name="right")
//       fa(name="search" scale="0.9")
//       fa(name="bars")
// </template>

// <script>
// import Logo from "~/components/navbar/Logo"

// export default {
//   components: {
//     Logo
//   }
// }
// </script>

// <style lang="sass">
// #header
//   width: 100%
//   z-index: 10
//   display: flex
//   align-items: center
//   justify-content: space-between
//   font-size: 16px
//   position: relative

//   *
//     display: flex
//     align-items: center
//     transition: all 0.2s ease-in-out

//   .right 
//     *
//       padding: 5px 0 5px 20px
  
//   .left > *
//     padding: 5px 20px 5px 0

//   .center
//     position: absolute
//     left: 0
//     right: 0
    
//     *
//       margin: auto
  
//   *, a
//     color: $color-text-gray

//   a:hover
//     color: $color-text-primary-hover
// </style>
