<template>  
  <section :id=id :class=class :style=style>
    <div class="title">
      <h2 class="text-white">Contacto</h2>
    </div>
    <div class="flex flex-col justify-start content-start text-start gap-5">
      <p>Si estás buscando ayuda para corregir un trabajo, una tesis, un texto para una página o blog, un posteo para redes o un proyecto literario estamos para acompañarte en cualquier parte del recorrido.</p>
      <div class="display-flex">
        <div>
          <p>¡Escribinos! 
            Para corrección y edición de textos 
            completá <a href="https://forms.gle/jbUMKPTjFL7JymRPA" target="_blank">el formulario</a>
            </p>
          <p>Por consultorias y talleres mandanos un mail y te enviamos información.</p>
          <p><a href="mailto:kundera.ediciones@gmail.com">kundera.ediciones@gmail.com</a></p>
        </div>
        <!-- <div>
          <img src="@/assets/img/logo/maquina-transp.png" alt="">
        </div> -->
      </div>
    </div>
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
  justify-content: flex-start
  text-align: start
  flex-direction: column
  color: #fff
  div.title
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    overflow: hidden
    height: min-content
    max-height: 168px
    width: 100%
    margin-bottom: 40px
  a
    color: #272727
</style>