<template>
  <header>
    <!-- <h1>Edición y corrección de textos</h1> -->
    <!-- <div id="container">
      <img id="img_flores" src="../assets/img/Floresweb.svg" alt="">
      <img src="../assets/img/logo/maquina-negra.png" alt="">
      <img src="../assets/img/Rayitas.svg" alt="">
    </div> -->
  </header>
</template>

<style lang="sass" scoped>
header
  height: calc(100vh - 66px)
  width: 100%
  margin-top: 66px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  background-image: url('../assets/img/header-image-violeta.png')
  background-size: contain
  background-repeat: no-repeat
  background-position: center
  background-color: var($mora)
  background-color: #8a4e98
  #container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 75%
    height: auto
    background-color: white
    img
      width: 400px
      height: auto
      z-index: 1
      position: absolute
</style>
