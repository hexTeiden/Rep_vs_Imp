<template>
  <div class="q-pa-md q-ma-lg row items-start q-gutter-md">
    <q-card class="inset-shadow-down" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h4 q-mt-sm q-mb-xs">Über das Projekt "Imperium vs Republik"</div>
          <div class="text-caption">
            Der Leitgedanke unseres Teams war es Menschen den Unterschied der politischen
            Führungsform der galaktischen Republik und des galaktischen Imperiums leichter zu
            erklären. Viele Menschen (vor allem Menschen die Star Wars nicht gesehen haben) wissen
            nicht was der Unterschied zwischen der Republik und des Imperiums ist und
            dementsprechend auch nicht wie sie über die Galaxie herrschen.
            <p class="text-overline">Projektteam</p>
            <span>
              <q-img
                src="../images/Test.jpg"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                class="img"
                id="Knogler"
                @click="KnoglerPopup()"
              />
              <div class="popup">
                <span class="popuptext" id="popupknogler"> Matteo Knogler </span>
              </div>
            </span>
            <span>
              <q-img
                src="../images/Lukas.jpg"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                class="img"
                id="Iveljic"
                @click="IveljicPopup()"
              />
              <div class="popup">
                <span class="popuptext" id="popupivejic"> Lukas Iveljic </span>
              </div>
            </span>
            <span>
              <q-img
                src="../images/Sayed_contact.png"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                class="img"
                id="Sadat"
                @click="SadatPopup()"
              />
              <div class="popup">
                <span class="popuptext" id="popupsadat"> Sayed Sadat </span>
              </div>
            </span>
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <!-- Ich bring mich selber um wegen diesem Logo -->
          <q-img class="rounded-borders" src="/src/images/Logo.PNG" />
        </q-card-section>
      </q-card-section>

      <q-separator />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',

  methods: {
    KnoglerPopup() {
      let popup = document.querySelector('#popupknogler');
      popup.classList.toggle('show');
    },
    IveljicPopup() {
      let popup = document.querySelector('#popupivejic');
      popup.classList.toggle('show');
    },
    SadatPopup() {
      let popup = document.querySelector('#popupsadat');
      popup.classList.toggle('show');
    },
  },
});
</script>

<style lang="sass">
.img
  margin-top: 20px
  margin-left: 20px
  margin-right: 20px
  margin-bottom: 20px
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
  width: 200px
  height: 200px

  /* Popup container */
.popup
  position: relative
  display: inline-block
  cursor: pointer


/* The actual popup (appears on top) */
.popup .popuptext
  visibility: hidden
  width: 160px
  background-color: #555
  color: #fff
  text-align: center
  border-radius: 6px
  padding: 8px 0
  position: absolute
  z-index: 1
  bottom: 125%
  left: 50%
  margin-left: -80px


/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show
  visibility: visible
  -webkit-animation: fadeIn 1s
  animation: fadeIn 1s


/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn
  from
    opacity: 0

  to
    opacity: 1



@keyframes fadeIn
  from
    opacity: 0

  to
    opacity: 1
</style>
