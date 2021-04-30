<template>
  <v-app>
    <v-app-bar dense :app="true" color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <v-icon>mdi-qrcode</v-icon> Leitor de QRCode
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <div v-if="bottomNav == 'home'">
          <p>
            O objetivo deste aplicativo é permitir a leitura de QRCode e não
            possui rastreador. Em breve será facilmente instalável para ser
            usado offline!
          </p>
        </div>
        <div v-if="bottomNav == 'read'">
          <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>
        <div v-if="bottomNav == 'other'">
          <h2>Sobre</h2>

          <!-- <p>
            Aplicação desenvolvida por<a
              href="https://twitter.com/__si_mon"
              target="_blank"
              >Simon</a
            >.
          </p> -->
          <p>
            Ele usa projetos de código aberto
            <a href="https://vuejs.org/" target="_blank">Vue.js</a> &amp;
            <a href="http://vuetifyjs.com/" target="_blank">Vuetify</a>
          </p>
          <!-- <p>
            Este aplicativo não possui rastreador. Código publicado em
            <a target="_blank" href="https://github.com/guizmo51/qrcodereader"
              >Github</a
            >
          </p> -->

        </div>
      </v-container>
    </v-content>
    <v-bottom-navigation
      background-color="primary"
      dark
      app
      v-model="bottomNav"
    >
      <v-btn value="home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn value="read">
        <span>Ler QRCode</span>
        <v-icon>mdi-qrcode</v-icon>
      </v-btn>
      <v-btn value="other">
        <span>Sobre</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { QrcodeStream,} from "vue-qrcode-reader";
export default {
  name: "App",
  components: { QrcodeStream },
  data() {
    return {
      bottomNav: "recent",
    };
  },
  methods: {
    onDecode(s) {
      alert(s);
    },
  },
};
</script>

<style>
</style>
