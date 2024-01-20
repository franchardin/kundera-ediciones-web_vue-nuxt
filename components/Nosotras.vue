<template>
  <section :id="id" :class="class" :style="style">
    <div>
      <h2 class="">nosotras</h2>
    </div>
    <div class="profileWrapper">
      <div class="profile" v-for="p in perfiles">
        <img class="profileImg" :src="p.picture" alt="">
        <img class="lines" :src="lines" alt="">
        <h3>{{ p.name }}</h3>
        <div class="textWrapper">
          <p>{{p.fullDescription}}</p>
          <!-- <p v-for="d in p.description">{{d}}</p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import perfil_1 from 'assets/img/fotos/perfil_1.png'
import perfil_2 from 'assets/img/fotos/perfil_2.jpeg'
import perfil_3 from 'assets/img/fotos/perfil_3.jpeg'
import lines from 'assets/img/Rayitas.png'

export default {
  props: ["id", "class", "style"],
  data() {
    return {
      perfiles: [
        {
          picture: perfil_2,
          name: "Camila García Reyna",
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
  background-color: $amarillo
  h2 
    color: $rojo
  .profileWrapper
    display: flex
    align-items: flex-start
    justify-content: space-between
    margin-top: 80px
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
  img.profileImg
    border-radius: 100%
    width: 100%
    height: auto
    aspect-ratio: 1
    object-fit: cover
  img.lines
    width: 100%
    height: auto
</style>