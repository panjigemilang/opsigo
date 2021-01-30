<template>
  <div class="container">
    <div class="screen"></div>

    <div
      v-for="(items, i) in seats"
      class="row justify-center"
      :key="`row-${i}`"
    >
      <div
        v-for="(seat, j) in items"
        class="seat"
        :class="seatStatus(seat)"
        :key="`seat-num-${j}`"
        @click="selectSeat(i, j)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seats",
  data() {
    return {
      seats: this.$store.seats.items,
    }
  },
  methods: {
    seatStatus(seat) {
      if (seat === 1) return "selected"
      else if (seat === 2) return "occupied"
    },
    selectSeat(i, j) {
      let temp = this.seats

      // unselecting seat
      if (temp[i][j] === 1) {
        temp[i][j] = 0
      }
      // selecting seat
      else {
        temp[i][j] = 1
      }

      this.seats = temp
      this.$store.seats.set(temp)

      // save it to localstorage
      window.localStorage.setItem("seats", JSON.stringify(temp))
    },
  },
}
</script>

<style scoped>
.seat:nth-of-type(2) {
  margin-right: 18px;
}
.seat:nth-last-of-type(2) {
  margin-left: 18px;
}
.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
}
.screen {
  background-color: #fff;
  height: 70px;
  width: 80%;
  margin: 15px auto;
  transform: rotateX(-45deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}
</style>
