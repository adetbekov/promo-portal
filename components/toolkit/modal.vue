<template>
    <transition name="fade">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="close()">
        <div class="modal-container" id="loginmodal">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close(){
      console.log("sfbksjnfjsdhblj")
      this.$router.push({path: this.localePath('main')})
    }
  }
}
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  color: white;
  font-family: "Ropa Sans", Roboto, sans-serif !important;
  font-size: 22px;
  line-height: 25px;
  text-transform: uppercase;
  width: 320px;
  margin: 0px auto;
  padding: 30px 30px;
  padding-bottom: 0;
  background: linear-gradient(180deg, #4F955D 0%, #086018 100%);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  max-height: calc(100vh);
  overflow-y: auto;
}

.modal-header h1 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<style lang="sass" scoped>
@import "assets/styles/fonts/ropa-sans.sass"
</style>

