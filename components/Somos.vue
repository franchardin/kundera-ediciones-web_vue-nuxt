<template>  
  <section :id=id :class=class :style=style>
    <div class="titleContainer">
      <div>
        <h2 class="">Somos</h2>
      </div>
      <div>
        <img class="h-auto" src="../assets/img/Floresweb.svg" alt="">
      </div>
    </div>
    <p>
      Somos lectoras, escritoras y autoras. Entendemos que toda escritura es un proceso creativo donde cada detalle es importante. Nuestra misión es acompañar ese proceso con herramientas y conocimientos fundamentales para fortalecer y potenciar cada recorrido.</p>
      <br>
      <p>Nos dedicamos a la edición y corrección de textos. Trabajamos con tesis, trabajos finales, informes, proyectos, convocatorias, redes sociales, blogs y páginas web. Brindamos talleres de escritura y realizamos  consultorías y asesoramientos en comunicación y creación de proyectos.</p>
  </section>
</template>
<script>
export default {
  props: ["id", "class", "style"],
}
</script>
<style lang="sass" scoped>
section
  background-color: $turquesa
  display: flex
  align-items: flex-start
  flex-direction: column
  .titleContainer
    @media screen and (max-width: 800px)
      margin-bottom: 0
  div
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    overflow: hidden
    height: min-content
    max-height: 168px
    width: 100%
    margin-bottom: 40px
    @media screen and (max-width: 800px)
      margin-bottom: 0
    img
      max-height: 168px
      width: auto
      transform: rotate(-45deg) translateX(12px)
      z-index: 0
      @media screen and (max-width: 720px)
        max-height: 130px
      @media screen and (max-width: 480px)
        max-height: 130px
        margin-left: auto
        margin-right: auto
</style>