<template>  
  <section :id=id :class=class :style=style>
    <div>
      <h2 class="">Talleres</h2>
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
      transform: rotate(-45deg) translateX(12px)
      z-index: 0
</style>