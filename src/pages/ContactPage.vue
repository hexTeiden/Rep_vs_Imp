<template>
  <div class="row justify-center wrap">
    <cards v-for="card in cards" :key="card.Caption" v-bind="card" class="my-card" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Cards from 'src/components/UserCards.vue';
import Test from '../images/Test.jpg';

const cards = [
  {
    Name: 'Matteo Knogler',
    Klasse: '3CHIT',
    Rolle: 'Projektleiter',
    Mail: 'knogler.m19@htlwienwest.at',
    link: Test,
  },
  {
    Name: 'Lukas Iveljic',
    Klasse: '3CHIT',
    Rolle: 'Vize Projektleiter',
    Mail: 'iveljic.l21@htlwienwest.at',
    link: Test,
  },
  {
    Name: 'Sayed Sadat Mubashar',
    Klasse: '3CHIT',
    Rolle: 'Projektmitglied',
    Mail: 'sadat.m21@htlwienwest.at',
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
//TODO: Fix the fucking css because I'm getting cancer rn
</script>

<style lang="sass" scoped>
.cardslist
  list-style-type: none
  padding: 0
  display: inline-block
</style>
