<template>
  <nav id="navbar" class="flex flex-row align-center justify-between px-5 py-2">
    <a class="" href="/">
      <img src="/img/logo-baja.png" alt="logo-kundera_ediciones">
    </a>
    <ul class="flex flex-row gap-4" :class="isActive">
      <li v-for="link in links" :key="link.id">
        <div class="" :class="isActive(link)" aria-label="navbar-link" @click="scrollToSection(link.url)">{{ link.name }}</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeLink: null
    };
  },
  mounted() {
  window.addEventListener('scroll', this.handleScroll);
},
beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
},
methods: {
  handleScroll() {
    const currentPosition = window.pageYOffset;
    const sections = ['#somos', '#hacemos', '#nosotras', '#talleres', '#contacto'];

    // Find the active section based on the scrolling position
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.querySelector(sections[i]);
      if (section.offsetTop <= currentPosition) {
        this.activeLink = sections[i];
        break;
      }
    }
  },
},
  computed: {
    isActive() {
      return (link) => link.url === this.activeLink ? 'active' : '';
    }
  },
  methods: {
    scrollToSection(target) {
      const targetSection = document.querySelector(target);
      if (targetSection) {
        const offset = document.getElementById('navbar').offsetHeight + 0;
        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: 'smooth',
        });
        this.activeLink = target;
      }
    },
  },
};
</script>

<script setup>
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

ul
  li
    div
      cursor: pointer
a
  text-decoration: none
.navbar-link.active
  font-weight: bold

</style>
