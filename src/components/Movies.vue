<template>
  <div class="movie-container">
    <label>Pick a movie:</label>
    <select id="movie" @change="selectMovie">
      <option
        v-for="(movie, i) in movies"
        :key="`movie-${i}`"
        :value="movie.price"
        >{{ movie.title }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {
      movies: [
        {
          title: "Avenger: Endgame ($10)",
          price: 10,
        },
        {
          title: "Joker ($12)",
          price: 12,
        },
        {
          title: "Toy Story 4 ($8)",
          price: 8,
        },
        {
          title: "The Lion King ($9)",
          price: 9,
        },
      ],
    }
  },
  methods: {
    selectMovie(e) {
      this.$store.movie.setPrice(e.target.value)
    },
  },
}
</script>

<style scoped>
.movie-container {
  margin: 20px 0;
}
.movie-container select {
  background-color: white;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
</style>
