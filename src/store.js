import Vue from "vue"

const store = Vue.observable({
  movie: {
    price: 0,
    setPrice(price) {
      this.price = price
    },
  },
  seats: {
    items: [],
    set(data) {
      this.items = data
    },
  },
})

export default store
