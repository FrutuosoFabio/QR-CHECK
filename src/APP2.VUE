<template>
  <v-app>
    <v-banner v-if="deferredPrompt" color="info" dark class="text-left">
      Get our free app. It won't take up space on your phone and also works
      offline!

      <template v-slot:actions>
        <v-btn text @click="dismiss">Dismiss</v-btn>
        <v-btn text @click="install">Install</v-btn>
      </template>
    </v-banner>

    <v-app-bar fixed dense :app="true" color="#161747" height="85px" dark>
      <v-toolbar-title class="headline text-uppercase">
        <img
          class="align-center"
          src="../src/assets/newlogo.png"
          alt="icone QR CHECK"
          width="60"
          height="60"
        />
      </v-toolbar-title>
      <v-app-bar-title style="font-size: x-large">QR Check</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <div v-if="bottomNav == 'home'">
          <p class="subtitle-3 text-center mt-12">
            Bem-vindo(a) ao sistema de ponto eletrônico.<br />Clique em escanear
            e aponte a câmera para o QR Code
          </p>
        </div>
        <div v-if="bottomNav == 'home'">
          <div class="text-center">
            <v-btn
              value="read"
              class="white--text"
              color="#0080ff"
              elevation="2"
              rounded
              x-large
              >Escanear
            </v-btn>
          </div>
        </div>

        <div v-if="bottomNav == 'read'">
          <br />
          <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>

        <div class="text-center float">
          <!--"text-center float">-->
          <img
            style="max-width: 300px"
            class="img-fluid"
            src="../src/assets/logo_ses_am_branco_hz.png"
            alt="icone QR CHECK"
            width="80%"
          />
        </div>
      </v-container>
    </v-content>

    <v-bottom-navigation
      background-color="#161747"
      height="85px"
      dark
      app
      v-model="bottomNav"
    >
      <v-btn value="home">
        <span>Registros</span>
        <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-btn value="read">
        <span>Tela de Scan</span>
        <v-icon>mdi-qrcode</v-icon>
      </v-btn>
      <v-btn value="other">
        <span>Sair</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import Cookies from "js-cookie";
export default {
  name: "App",
  components: { QrcodeStream },
  data() {
    return {
      bottomNav: "recent",
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.deferredPrompt = e;
      }
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      Cookies.set("add-to-home-screen", null, { expires: 15 });
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
    onDecode(s) {
      alert(s);
    },
  },
};
</script>