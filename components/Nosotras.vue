<template>
  <section :id="id" :class="class" :style="style">
    <div>
      <h2 class="">Nosotras</h2>
    </div>
    <div class="profileWrapper">
      <div class="profile" v-for="p in perfiles">
        <div class="profileImgContainer">
          <img class="profileImg" :src="p.picture" alt="imagen-perfil">
        </div>
        <img class="lines" src="@/assets/img/Rayitas.svg" alt="">
        <nuxt-link :to="`/perfil/${p.url}`">
          <h3>{{ p.name }}</h3>
        </nuxt-link>
        <div class="textWrapper">
          <!-- <p>{{p.fullDescrperfiliption}}</p> -->
          <p v-for="d in p.description">{{d}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import perfil_1 from 'assets/img/fotos/perfil_1.png'
import perfil_2 from 'assets/img/fotos/perfil_2.jpeg'
import perfil_3 from 'assets/img/fotos/perfil_3.jpeg'

export default {
  props: ["id", "class", "style"],
  data() {
    return {
      perfiles: [
        {
          picture: perfil_2,
          name: "Camila García Reyna",
          url: "camila",
          description: [
            "Escritora, poeta y editora.",
            "Docente de escritura creativa. Licenciada ",
            "en Letras Modernas y Técnica en Corrección Literaria por la ",
            "Universidad Nacional de Córdoba."
          ],
          fullDescription: "Escritora, poeta y editora. Docente de escritura creativa. Licenciada en Letras Modernas y Técnica en Corrección Literaria por la Universidad Nacional de Córdoba."
        },
        {
          picture: perfil_3,
          name: "Lucía Falón",
          url: "lucia",
          description: [
            "Escritora, profesora de Lengua y Literatura y copywriting. ",
            "Autora de literatura infantil. ",
            "Licenciada en Letras Modernas por la ",
            "Universidad Nacional de Córdoba."
          ],
          fullDescription: "Escritora, profesora de Lengua y Literatura y copywriting. Autora de literatura infantil. Licenciada en Letras Modernas por la Universidad Nacional de Córdoba."
        },
        {
          picture: perfil_1,
          name: "Cintia Mussolini",
          url: "cintia",
          description: [
            "Escritora, poeta y editora.",
            "Docente de escritura creativa. Licenciada ",
            "en Letras Modernas y Técnica en Corrección Literaria por la ",
            "Universidad Nacional de Córdoba."
          ],
          fullDescription: "Periodista, autora  e investigadora. Maestranda en Periodismo Narrativo UNSAM - Revista Anfibia. Licenciada en Comunicación Social por la Universidad Nacional de Quilmes."
        },
      ]
    }
  },
};
</script>

<style lang="sass">
section
  background-color: $amarilloClaro
  h2 
    color: $rojo
  .profileWrapper
    display: flex
    align-items: flex-start
    justify-content: space-between
    margin-top: 40px
    .profile
      display: flex
      flex-direction: column
      max-width: 28%
      .textWrapper
        display: flex
        flex-direction: column
        align-items: flex-start
        p
          text-wrap: balance
      h3
        font-family: 'Carollo', 'Courier Prime', 'Ubuntu Mono', 'IBM Plex Mono', monospace
        text-shadow: none
        color: $rojo
        font-weight: 700
        font-size: 1.2em
        margin: 10px 0
        align-self: center
  div.profileImgContainer
    border-radius: 100%
    height: 100%
    width: auto
    aspect-ratio: 1
    object-fit: cover
    max-height: 155px
    max-width: 155px
    overflow: hidden
    align-self: center
    img
      filter: saturate(0)
  img.lines
    width: 100%
    height: auto
    margin: 10px 0
</style>