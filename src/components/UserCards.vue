<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <img :src="link" style="height: 350px; width: 300px" />
      <q-card-section>
        <div class="text-h6">{{ Name }}</div>
      </q-card-section>
      <q-card-section>Klasse: {{ Klasse }} </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarElements',
  props: {
    Name: {
      type: String,
      required: true,
    },
    Klasse: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },
});
</script>
