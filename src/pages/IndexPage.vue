<template>
  <q-page class="flex flex-center">
    <video>
      <source
        src="https://drive.google.com/file/d/1i_PbfSGXsl_AHOMcaSgwV54VtDOrOieg/view?usp=sharing"
      />
      Shit does not work
    </video>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      counter: 0,
      empire: new Audio('/audios/Empire.mp3'),
      republic: new Audio('/audios/Republic.mp3'),
    };
  },
  methods: {
    test() {
      if (this.counter === 0) {
        this.republic.play();
        this.counter++;
        console.log(this.counter);
      }
    },
    changeMusic() {},
  },
});
</script>

<style lang="sass">
.jux
  width: 100%
  height: 600
  margin-top: 20px
  margin-bottom: 20px
  margin-left: 20px
  padding: 20px
  border: 1px solid #ccc
  border-radius: 5px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
</style>
