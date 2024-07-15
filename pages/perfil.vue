<template>
  <div class="perfil">
    <div class="profileImgContainer">
      <img :src="profile.picture" alt="imagen-perfil">
    </div>
    <img class="lines" src="@/assets/img/Rayitas.svg" alt="">
    <h1>{{ profile.name }}</h1>
    <p v-for="p in profile.fullDescription">{{ p }}</p>
    <button @click="scrollToTop">botón</button>
  </div>
</template>

<style lang="sass" scoped>
h1
  font-size: 3rem
  padding: 10px
  text-align: center
  color: #000
  text-shadow: none

div.perfil
  margin-top: 50px
  width: 100%
  background-color: $amarilloClaro
  margin: 66px auto 0
p
  margin-top: 12px

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
  margin-top: 100px
  margin-bottom: 18px
  margin-left: auto
  margin-right: auto

p
  padding: 0 32px

img.lines
  max-width: 155px
  height: auto
  margin: 10px auto
</style>

<script>
import _url from './_url.vue'; // Import _url component
import perfil_1 from 'assets/img/fotos/perfil_1.png'
import perfil_2 from 'assets/img/fotos/perfil_2.jpeg'
import perfil_3 from 'assets/img/fotos/perfil_3.jpeg'

export default {
  components: {
    _url // Register _url component
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: -1000, behavior: 'smooth'})
    }
  },
  data() {
    return {
      profiles: [
        {
          name: "Camila García Reyna",
          url: "perfil-camila",
          fullDescription: [
            "Mi nombre es Camila García Reyna, nací en Córdoba Capital y resido actualmente en Unquillo. Soy Licenciada en Letras Modernas y Técnica en Corrección Literaria por la UNC. También soy poeta y me dedico a la coordinación de talleres de lectura y escritura creativa y de clínicas de poesía, lo que me apasiona e implica en mi vida mucha lectura e investigación.",
            "Corregir y acompañar procesos de edición de libros me entusiasma mucho y he acompañado en la escritura y publicación de sus libros a muchas personas.",
            "Hace varios años fui preceptora y docente de secundaria pero finalmente  renuncié para dedicarme de lleno a los talleres, las clínicas, las correcciones y la propia escritura.",
            "He publicado: Poemas para después de que te fuiste (ed. Venteveo, 2013); Poemas para ser leídos en voz alta I, II y III (ed. Gráfica 29 de mayo, 2014); Cartas a Margarito Primavera (narrativa infantil, condición 2015); Lirios caminantes. Poemas para las hermanas (ed. Flor de Luna, 2019) y  Elemental (poesía - cianotipos, ed. Cielo Invertido, 2020), que obtuvo el Premio Burnichón a libro mejor editado en Córdoba 2020-2021.",
            "Junto con Uva Aimé conformo la dupla poético-musical Y una de coco, cuyo disco-libro ilustrado homónimo fue editado en 2022 y puede escucharse en plataformas como Spotify o Youtube.",
          ],
          picture: perfil_2,
        },
        {
          name: "Lucia Falón",
          url: "perfil-lucia",
          fullDescription: [
            "Mi nombre es Lucía Falón, estudié la Licenciatura en Letras Modernas y la Tecnicatura en Corrección Literaria en la Universidad Nacional de Córdoba. Disfruto mucho de leer, escribir y ayudar a otros a dar forma y sentido a sus ideas y escritos.",
            "Actualmente me dedico a corregir desde trabajos académicos hasta contenido para redes. Fui profesora de Lengua y Literatura en escuelas secundarias de Córdoba durante 10 años. En 2022 empecé a trabajar en Bambú Latam, una agencia de linkbuilding que me formó en el mundo del copywriting. Gracias a esa experiencia como redactora de contenidos, tuve la posibilidad de escribir para decenas de medios gráficos en los últimos años.",
            "En el 2020 comenzó para mí el laborioso y bellísimo camino de la maternidad, que transformó todo a su paso. Si bien escribo desde que cursaba en la universidad, fue ese el año en el que comencé a escribir poesía y cuentos para niños. ",
            "En 2022 salió a la superficie La Ballena Lena, mi primera publicación de literatura infantil, editada por Los Ríos. Ese camino fascinante que es la escritura para niños y niñas me tiene completamente deslumbrada, inventando personajes e historias en cualquier momento, aprendiendo de cada cosa que leo, haciendo clínicas con escritoras que admiro, y por supuesto, probando cada idea con los pequeños lectores que tengo en casa."
          ],
          picture: perfil_3,
        },
        {
          name: "Cintia Mussolini",
          url: "perfil-cintia",
          fullDescription: [
            "Mitad cordobesa, mitad neuquina, hoy vivo en Buenos Aires. A la mudanza 33, dejé de contar. Soy comunicadora social y periodista por la Universidad Nacional de Quilmes y Maestranda en Periodismo Narrativo por la UNSAM - Revista Anfibia. Me apasiona escribir, investigar y buscar nuevas narrativas para contar el mundo.",
            "Trabajé en diversos y numerosos proyectos culturales que van desde convocatorias, encuentros, congresos y ediciones de libros hasta festivales y conciertos. Mi experiencia en la escritura integra la comunicación digital, el periodismo, la investiga-ción, la producción de contenidos, y la no ficción.",
            "Escribo para medios digitales sobre feminismo(s), extractivismos, derechos humanos, interseccionalidad, descolonialidad, identidad, memoria y suicidio.",
            'Publiqué "Somos plurinacional. Crónica de la transformación del Encuentro Nacional de Mujeres" publicado por la Editorial de la Universidad Nacional de Quilmes, 2023.',
            'Soy coautora de "Subalternidades y resistencias: experiencias de mujeres en los barrios ciudades", una compilación editada por Patricia Scarponetti y Alejandra Cuiffolini titulada "Ojos que no ven, corazón que no siente", y publicada en Buenos Aires por Ediciones Nobuko, 2011.',
            "Actualmente escribo sobre Vaca Muerta y cómo se organiza la vida y la identidad alrededor del mundo del petróleo en la Patagonia Argentina.",
            "Creo firmemente en la importancia de contar historias poderosas que no sólo informen, sino que también aporten conocimientos, promuevan conversaciones, inspiren y construyan nuevos imaginarios.",
          ],
          link: 'linktr.ee/cinmusso',
          picture: perfil_1
        },
      ],
      profile: {}
    }
  },
  created() {
    const profileUrl = this.$route.name;
    this.profile = this.profiles.find(p => p.url === profileUrl);
  },
  mounted() {
   this.scrollToTop()
  },
}
</script>