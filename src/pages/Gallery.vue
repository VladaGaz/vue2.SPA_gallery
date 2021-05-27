<template>
  <v-container fluid>
    <v-hover v-slot="{ hover }" :key="k" v-for="(category, k) in categories">
      <v-card v-if="category">
        <v-carousel>
          <v-carousel-item
            v-for="(picture, i) in category"
            :key="i"
            :src="picture.url"
          >
            <v-expand-transition>
              <div v-if="hover" class="btn-more">
                <router-link class="link" :to="/details/ + picture.id">
                  <v-btn color="deep-purple accent-4" elevation="2" dark large>
                    More
                  </v-btn>
                </router-link>
              </div>
            </v-expand-transition>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-hover>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    const size = 6;
    const categories = [];
    const array = this.$store.getters.getСategories;

    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      categories[i] = array.slice(i * size, i * size + size);
    }

    this.categories = categories;
  },
};
</script>


<style scoped>
.btn-more {
  position: absolute;
  opacity: 1;
  top: calc(50% - 48.8px / 2);
  left: calc(50% - 128px / 2);
}
</style>