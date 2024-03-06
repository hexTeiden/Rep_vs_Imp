<template>
  <div class="q-pa-md">
    <q-list>
      <q-item clickable tag="a" :href="link" v-close-popup>
        <q-item-section>
          <q-item-label>{{ Caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarElements',
  props: {
    Caption: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '#',
    },
  },
});
</script>
