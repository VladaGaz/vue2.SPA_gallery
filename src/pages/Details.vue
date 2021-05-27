<template>
  <v-container fluid v-if="picture">
    <h1>{{ picture.title }}</h1>
    <p>
      <img :src="picture.url" />
    </p>
    <p>
      <span>id: {{ picture.id }}</span>
    </p>
    <p>
      <span>url: {{ picture.url }}</span>
    </p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      picture: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    const categories = this.$store.getters.getСategories;
    this.picture = categories.find((picture) => picture.id == id);
  },
};
</script>

