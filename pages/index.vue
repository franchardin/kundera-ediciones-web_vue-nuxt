<template>
  <Header />
  <ServicesBanner />
  <Mision />
  <Somos id="somos" class="mt-0" />
  <Hacemos id="hacemos" />
  <Nosotras id="nosotras" />
  <Contacto id="contacto"/>
</template>

<style lang="sass" scoped>
wrapper
  max-width: 80%
  margin: 0 auto
  display: flex
  flex-direction: column
  gap: 240px
  background-color: $mora
section
  div
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    overflow: hidden
    width: 100%
</style>