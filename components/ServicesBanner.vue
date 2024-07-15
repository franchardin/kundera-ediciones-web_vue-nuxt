<template>
  <div class="bg-red-500 services-banner md:flex-row" aria-details="services-banner">
    <img src="../assets/img/Mano.png" alt="">
    <p class="">Corrección ortotipográfica y de estilo / Edición de textos / Artículos académicos y tesis / Proyectos y convocatorias / Textos de ficción y no ficción / Asesoramiento en comunicación de proyectos.</p>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="sass">
div.services-banner
  display: flex
  align-items: center
  justify-content: space-around
  padding: 20px 32px
  margin: 30px
  img
    width: 120px
    height: auto
    aspect-ratio: auto
  p
    max-width: 55%
    text-align: center
    text-wrap: balance
@media screen and (max-width: 800px)
  div.services-banner
    p
      max-width: 70%
      text-align: right
@media screen and (max-width: 768px)
  div.services-banner
    flex-direction: column
    p
      text-align: center
      margin-top: 10px
</style>