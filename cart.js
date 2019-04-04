const cars = require('./data/cars');

module.exports = {
  cart: null,
  total: null,

  addToCart: function(car) {
    this.cart.push(car)
    this.total+=car.price
  },

  removeFromCart: function(loc,price) {
    this.cart.splice(loc,1)
    this.total-=price
  },
  
  checkout: function() {
    this.cart = []
    this.total = null
  }
};