<template>
  <nav id="navbar" class="flex flex-row align-center justify-between px-5 py-2">
    <a class="" href="/">
      <img src="/img/logo-baja.png" alt="logo-kundera_ediciones">
    </a>
    <ul class="flex flex-row gap-4">
      <li v-for="link in links" :key="link.id">
        <div class="" aria-label="navbar-link" @click="scrollToSection(link.url)">{{ link.name }}</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToSection(target) {
      const targetSection = document.querySelector(target);
      if (targetSection) {
        const offset = document.getElementById('navbar').offsetHeight + 50;
        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: 'smooth',
        });
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
  {
    id: 4,
    name: 'talleres y consultorías',
    url: '#talleres'
  },
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
  img
    height: 50px
    width: auto

ul
  li
    div
      cursor: pointer
a
  text-decoration: none
</style>
