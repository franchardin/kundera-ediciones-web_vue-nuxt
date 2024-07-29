<template>
  <section :id="id" :class="class" :style="style">
    <div>
      <h2>Hacemos</h2>
    </div>
    <ul class="list-disc custom-list" style="list-style: disc;">
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["id", "class", "style"],
  data() {
    return {
      list: [
        'Corrección ortotipográfica y de estilo.',
        'Edición de textos: ficción y no ficción, tesis y artículos académicos, convocatorias y proyectos. ',
        'Asesoramiento en comunicación de proyectos.',
        'Talleres de escritura creativa.',
        'Clínicas de corrección y edición de textos.',
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
section
  background-color: $rojo
  div
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    overflow: hidden
    width: 100%
    h2
      color: $amarillo
  ul
    margin-top: 18px
    margin-left: 18px
    li
      margin-top: 8px
      &::before
        content: ""
        display: inline-block
        width: 6px
        height: 6px
        line-height: 12px
        border-radius: 50%
        background-color: #000
        margin-right: 8px
        margin-bottom: 2px
</style>