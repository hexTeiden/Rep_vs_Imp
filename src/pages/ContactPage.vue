<template>
  <div class="row justify-center wrap">
    <cards v-for="card in cards" :key="card.Name" v-bind="card" class="my-card" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Cards from 'src/components/UserCards.vue';
import Matteo from '../images/Test.jpg';
import Sayed from 'src/images/Sayed_contact.png';
import Lukas from 'src/images/Lukas.jpg';

const cards = [
  {
    Name: 'Matteo Knogler',
    Klasse: '3CHIT',
    Rolle: 'Projektleiter',
    Mail: 'knogler.m19@htlwienwest.at',
    Telefon: '0664 422 7392',
    link: Matteo,
  },
  {
    Name: 'Lukas Iveljic',
    Klasse: '3CHIT',
    Rolle: 'Vize Projektleiter',
    Mail: 'iveljic.l21@htlwienwest.at',
    Telefon: '0664 422 9372',
    link: Lukas,
  },
  {
    Name: 'Sayed Sadat Mubashar',
    Klasse: '3CHIT',
    Rolle: 'Projektmitglied',
    Mail: 'sadat.m21@htlwienwest.at',
    Telefon: '0664 422 7392',
    link: Sayed,
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

<style lang="sass" scoped>
.cardslist
  list-style-type: none
  padding: 0
  display: inline-block
</style>
