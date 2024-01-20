<template>  
  <section :id=id :class=class :style=style>
    <div>
      <h2 class="">somos</h2>
      <img class="h-auto" src="../assets/img/Floresweb.svg" alt="">
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
  padding: 60px 20% 240px
  display: flex
  align-items: flex-start
  flex-direction: column
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
    img
      max-height: 168px
      width: auto
      transform: rotate(-45deg) translateX(-30px)
      z-index: 0
</style>