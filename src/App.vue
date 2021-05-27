<template>
  <v-app>
    <v-navigation-drawer v-model="isOpenMenu" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="menuList"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link :to="links[0].url">
            <v-list-item>
              <v-list-item-icon> </v-list-item-icon>
              <v-list-item-title>
                {{ links[0].title }}
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link :to="links[1].url">
            <v-list-item>
              <v-list-item-icon> </v-list-item-icon>
              <v-list-item-title>
                {{ links[1].title }}
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-title>
              <img src="./assets/img/avatar.jpeg" style="width: 40px" />
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-title>
              <p>Газизова Влада</p>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-title>
              <p>vladamuzyka7@gmail.com</p>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple" dark>
      <v-app-bar-nav-icon @click="isOpenMenu = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Menu</v-toolbar-title>
    </v-app-bar>

    <v-main v-if="!getLoader">
      <router-view></router-view>
    </v-main>

    <loader :loading="getLoader"></loader>
  </v-app>
</template>

<script>
import Loader from "./components/Loader";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getLoader"]),
  components: {
    Loader,
  },
  data() {
    return {
      links: [
        { title: "Gallery", url: "/" },
        { title: "About", url: "/about" },
      ],
      isOpenMenu: false,
      menuList: null,
    };
  },
  created() {
    this.$store.dispatch("getСategories");
  },
};
</script>

<style>
a {
  text-decoration: unset;
}
</style>