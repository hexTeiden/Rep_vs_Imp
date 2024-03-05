<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Imperium vs Galaktische Republik </q-toolbar-title>
        <!-- TODO: Change the name of the div below me :D -->
        <div>
          <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
              <q-item-label>Important Webpage Links</q-item-label>
              <!-- FIXME: Fix the Button Dropdown -->
              <ButtonDropdown v-for="link in Button" :key="link.caption" v-bind="link" />
            </q-list>
          </q-drawer>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <!-- TODO: Add more important Links to the navbar -->
        <q-item-label header> Essential Links </q-item-label>

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
import ButtonDropdown from 'components/DropdownButton.vue';

const linksList = [
  {
    title: 'Suffering',
    caption: 'github.com',
    icon: 'code',
    link: 'https://github.com/hexTeiden/Rep_vs_Imp',
  },
  {
    title: 'Drive',
    caption: 'Google Drive',
    icon: 'code',
    link: 'https://drive.google.com/drive/folders/1rmANsVLZxVw44BJK6KlEw9MrYJK3Wj2i?usp=share_link',
  },
  {
    title: 'Schule',
    caption: 'HTL Wien West',
    icon: 'school',
    link: 'https://www.htlwienwest.at',
  },
];

const Button = [
  {
    Caption: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    Caption: 'About',
    link: '/about',
    icon: 'info',
  },
  {
    Caption: 'Contact',
    link: '/contact',
    icon: 'mail',
  },
  {
    Caption: 'Login',
    link: '/login',
    icon: 'login',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    ButtonDropdown,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
