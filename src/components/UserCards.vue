<template>
  <div class="q-pa-md">
    <q-card class="my-card q-pa-md">
      <img :src="link" style="width: 20rem; border-radius: 10px" />
      <q-card-section>
        <div class="text-h6">{{ Name }}</div>
      </q-card-section>
      <q-card-section>
        Klasse: {{ Klasse }} <br />
        Rolle: {{ Rolle }} <br />
        Mail: {{ Mail }} <br />
        Telefon: {{ Telefon }} <br />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCards',
  props: {
    Name: {
      type: String,
      required: true,
    },
    Klasse: {
      type: String,
      required: true,
      default: '3CHIT',
    },
    Rolle: {
      type: String,
      default: 'Projektmitglied',
    },
    Mail: {
      type: String,
      required: true,
      default: '@htlwienwest.at',
    },
    Telefon: {
      type: String,
      default: '0664 123 45 67',
    },
    link: {
      type: String,
      default: '',
    },
  },
});
</script>
