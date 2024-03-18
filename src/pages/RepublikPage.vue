<template>
  <audio autoplay loop><source src="/audios/Republic.mp3" type="audio/mp3" /></audio>
  <q-page class="flex flex-center">
    <q-page-container>
      <q-card>
        <q-card-section>
          <h2>Welcome to Republik Layout</h2>
          <p>This is a simple Quasar page.</p>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RepublikPage',
});
</script>
