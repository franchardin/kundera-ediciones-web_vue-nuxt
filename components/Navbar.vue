<template>
  <nav id="navbar" class="flex flex-row content-center justify-between px-5 py-2">
    <div class="logoAndSocials flex content-center justify-center">
      <button @click="handleClick('#top')">
        <img src="/img/logo-baja.png" alt="logo-kundera_ediciones">
      </button>
      <ul class="topSocials socials">
        <li v-for="social in socials" class="content-center">
          <a :href="social.url" target="_blank">
            <img class="socialIcon" :src="social.icon">
          </a>
        </li>
      </ul>
    </div>
    <div class="navLinks">
      <ul class="flex flex-row sm:gap-4 links" :class="isActive">
        <li v-for="link in links" :key="link.id">
          <div class="navbar-link" :class="isActive(link)" aria-label="navbar-link" @click="handleClick(link.url)">{{ link.name }}</div>
        </li>
      </ul>
    </div>
    <ul class="bottomSocials socials">
      <li v-for="social in socials" class="content-center">
        <a :href="social.url" target="_blank">
          <img class="socialIcon" :src="social.icon">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import instagram from 'assets/icons/instagram.svg'
import linkedin from 'assets/icons/linkedin.svg'
import mail from 'assets/icons/mail.svg'

export default {
  data() {
    return {
      activeLink: null,
      justClicked: false,
      sections: ['#somos', '#hacemos', '#nosotras', '#contacto'],
    };
  },
  mounted() {
  window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    this.handleScroll();
  },
methods: {
  handleScroll() {
    const currentPosition = window.scrollY;
    if (currentPosition !== 0) {
      for (let i = this.sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(this.sections[i]);
        if (section && section?.offsetTop <= currentPosition + 80) {
          this.activeLink = this.sections[i];
          break;
        }
      }
    } else {
      this.activeLink = null;
    }
  },
  goBackAndScroll(target) {
      this.$router.back()
      scrollToSection(target)
    },
  scrollToSection(target) {
    const targetSection = document.querySelector(target);
    if (targetSection) {
      const offset = document.getElementById('navbar').offsetHeight;
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  },
  handleClick(target) {
    if (this.$router.currentRoute._value.fullPath.includes('perfil')) {
      this.$router.back();
      setTimeout(() => {
        this.scrollToSection(target);
      }, 100);
    } else {
      this.scrollToSection(target);
    }
  },
},
  computed: {
    isActive() {
      return (link) => link.url === this.activeLink ? 'active' : '';
    }
  }
}
</script>

<script setup>
const socials = [
  {
    url: 'https://www.instagram.com/kunderaediciones/',
    icon: instagram,
  },
  {
    url: 'https://www.linkedin.com/company/kundera-ediciones/about/',
    icon: linkedin,
  },
  {
    url: 'mailto:kunderaediciones@gmail.com',
    icon: mail,
  },
]

const links = ref([
  {
    id: 1,
    name: 'somos',
    url: '#somos'
  },
  {
    id: 2,
    name: 'hacemos',
    url: '#hacemos'
  },
  {
    id: 3,
    name: 'nosotras',
    url: '#nosotras'
  },
/*   {
    id: 4,
    name: 'talleres y consultorías',
    url: '#talleres'
  }, */
  {
    id: 5,
    name: 'contacto',
    url: '#contacto'
  }
])
</script>

<style lang="sass" scoped>
nav
  width: 100%
  position: fixed
  top: 0
  display: flex
  align-items: center
  background-color: #fff
  z-index: 3
  img
    height: 50px
    width: auto
  .socials.topSocials
    display: flex
    gap: 10px
    margin-right: auto
    margin-left: 3%
  .bottomSocials
    display: none
ul
  li
    div
      cursor: pointer
    a
      img
        height: 35px
        &:hover
          opacity: .7
a
  text-decoration: none
.navbar-link.active
  font-weight: bold
@media screen and (max-width: 720px)
  nav
    flex-direction: column
    .logoAndSocials
      justify-content: space-between
      width: 100%
      .socials.topSocials
        margin-right: 3%
    .navLinks
      margin-top: 6px
      margin-bottom: 4px
@media screen and (max-width: 639px)
  nav
    .navLinks
      ul.links
        gap: 6px
@media screen and (max-width: 370px)
  div.logoAndSocials
    justify-content: center
  ul.socials.topSocials
    display: none
  .links
    flex-wrap: wrap
    justify-content: center
  .socials.bottomSocials
    display: flex
    align-self: center
    justify-self: center
    margin-right: 3%
    margin-top: 6px
    margin-bottom: 4px
    gap: 10px
    flex-wrap: wrap
</style>
