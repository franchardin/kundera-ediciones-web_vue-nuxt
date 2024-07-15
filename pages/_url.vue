<template>
  <div>
    <h1>Profile</h1>
    <p>{{ profile.name }}</p>
    <p>{{ profile.fullDescription }}</p>

    <!-- Other profile details -->
  </div>
</template>

<script>
import perfil_1 from 'assets/img/fotos/perfil_1.png'
import perfil_2 from 'assets/img/fotos/perfil_2.jpeg'
import perfil_3 from 'assets/img/fotos/perfil_3.jpeg'

export default {
  data() {
    return {
      profiles: [
        {
          "name": "Camila",
          "url": "camila",
          "fullDescription": "Profile details for Camila",
          picture: perfil_1,
        },
        {
          "name": "Lucia",
          "url": "lucia",
          "fullDescription": "Profile details for Lucia",
          picture: perfil_2,
        },
        {
          "name": "Cintia",
          "url": "cintia",
          "fullDescription": "Profile details for Cintia",
          picture: perfil_3
        },
      ],
    }
  },
  async fetch() {
    const url = this.$route.params.url;
    this.profile = this.profiles.find(p => p.url === url);
  }
}
</script>