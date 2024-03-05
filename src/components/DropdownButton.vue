<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Dropdown Button">
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>
              <q-route-tab icon="{{ icon }}" to="{{ link }}" exact>
                {{ Caption }}
              </q-route-tab>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropdownButton',
  props: {
    Caption: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: 'school',
    },
  },
});
</script>
