<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Imperium vs Galaktische Republik </q-toolbar-title>
        <NavbarElements v-for="link in buttonlinks" :key="link.Caption" v-bind="link" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Referential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import NavbarElements from 'components/NavbarElements.vue';

const linksList = [
  {
    title: 'Github',
    caption: 'github.com',
    icon: 'public',
    link: 'https://github.com/hexTeiden/Rep_vs_Imp',
  },
  {
    title: 'Drive',
    caption: 'Google Drive',
    icon: 'public',
    link: 'https://drive.google.com/drive/folders/1rmANsVLZxVw44BJK6KlEw9MrYJK3Wj2i?usp=share_link',
  },
  {
    title: 'Schule',
    caption: 'HTL Wien West',
    icon: 'school',
    link: 'https://www.htlwienwest.at',
  },
  {
    title: 'Vue Framework',
    caption: 'Vue.js',
    icon: 'code',
    link: 'https://vuejs.org',
  },
  {
    title: 'Quasar Framework',
    caption: 'Quasar.dev',
    icon: 'code',
    link: 'https://quasar.dev',
  },
  {
    title: 'Juxtapose',
    caption: 'Link to Juxtapose',
    icon: 'code',
    link: 'https://juxtapose.knightlab.com',
  },
];

const Button = [
  {
    Caption: 'Home',
    link: '/',
  },
  {
    Caption: 'Republik',
    link: '/republik',
  },
  {
    Caption: 'Imperium',
    link: '/imperium',
  },
  {
    Caption: 'About',
    link: '/about',
  },
  {
    Caption: 'Contact',
    link: '/contact',
  },
];

export default defineComponent({
  name: 'ContactLayout',

  components: {
    EssentialLink,
    NavbarElements,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      buttonlinks: Button,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
