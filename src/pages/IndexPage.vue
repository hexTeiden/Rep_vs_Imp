<template>
  <q-page class="flex flex-center">
    <iframe
      frameborder="0"
      class="juxtapose q-ml-xl q-mr-auto q-mt-md q-mb-md"
      width="100%"
      height="911"
      margin-left="150px"
      src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=78215c26-e58b-11ee-9685-5d0fb8b12f54"
    ></iframe>
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
      //can be overwritten for any specific function that has to be tested before deployin the actual method
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
