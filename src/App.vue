<template>
  <div id="app">
    <Movies />

    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <Seats />

    <p class="text">
      You have selected
      <span id="count">{{ selectedSeats }}</span> seats for a price of $<span
        id="total"
        >{{ selectedSeats * $store.movie.price }}</span
      >
    </p>
  </div>
</template>

<script>
import Movies from "./components/Movies"
import Seats from "./components/Seats"

export default {
  name: "App",
  components: {
    Movies,
    Seats,
  },
  computed: {
    selectedSeats() {
      let count = 0

      // get selected seats
      this.$store.seats.items.map((item) =>
        item.map((val) => {
          if (val === 1) count++
        })
      )

      return count
    },
  },
  mounted() {
    // check if there's an items in local storage
    if (!window.localStorage.getItem("seats")) {
      let defaultSeats = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 2],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 0],
      ]

      this.$store.seats.set(defaultSeats)
      // save it to local storage
      window.localStorage.setItem("seats", JSON.stringify(defaultSeats))
    } else {
      this.$store.seats.set(JSON.parse(window.localStorage.getItem("seats")))
    }
  },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
* {
  box-sizing: border-box;
}
body {
  background-color: #242333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Lato", sans-serif;
  margin: 0;
}
.container {
  perspective: 1000px;
  margin-bottom: 30px;
}
.row {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.showcase .seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}
.showcase {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  columns: #777;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.showcase li small {
  margin-left: 2px;
}
.seat {
  background-color: #444451;
  height: 12px;
  width: 15px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.seat.selected {
  background-color: #6feaf6;
}
.seat.occupied {
  background-color: white;
  pointer-events: none;
}
p.text {
  margin: 5px 0;
}
p.text span {
  color: #6feaf6;
}
</style>
