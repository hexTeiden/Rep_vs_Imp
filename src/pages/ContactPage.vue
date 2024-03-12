<template>
  <q-page class="flex flex-center">
    <q-page-container>
      <q-list bordered class="flex-inline">
        <cards v-for="card in cards" :key="card.Caption" v-bind="card" />
      </q-list>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Cards from 'src/components/UserCards.vue';
import Test from '../images/Test.jpg';

const cards = [
  {
    Name: 'Matteo Knogler',
    Klasse: '3CHIT',
    link: Test,
  },
  {
    Name: 'Lukas Iveljic',
    Klasse: '3CHIT',
    link: Test,
  },
  {
    Name: 'Sayed Sadat Mubashar',
    Klasse: '3CHIT',
    link: Test,
  },
];

export default defineComponent({
  name: 'ContactPage',

  components: {
    Cards,
  },

  setup() {
    return {
      cards: cards,
    };
  },
});
</script>
