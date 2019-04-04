const cart = require('./cart')
const cars = require('./data/cars')

describe('cart properties',()=>{
  test("Check if cart is an empty array",()=>{
    expect(Array.isArray(cart.cart)).toEqual(true)
    expect(cart.cart.length).to.Equal(0)
  })

  test("Total should be 0",()=>{
    expect(cart.total).toEqual(0)
  })

})

describe('cart methods', ()=>{
  /*an after each function is needed to reset the cart array and total value */
  afterEach(()=>{
    cart.cart = [];
    cart.total = 0
  })

  test("expect car object to be added",()=>{
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1])
    expect(cart.cart.length).toEqual(2)
    expect(cart.cart[0]).toEqual(cars[0])
    expect(cart.cart[1]).toEqual(cars[1])
  })

  test("expect cart total to be updated",()=>{
    cart.addToCart(cars[0])
    cart.addToCart(cars[1])
    expect(cart.total).toEqual(cars[0].price+cars[1].price);
  })

  test("removeFromCart should remove an object from the cart array",()=>{
    cart.addToCart(cars[0])
    cart.addToCart(cars[1])
    cart.removeFromCart(1,cars[1].price)
  })

  test("removeFromCart decreases Total",()=>{
    cart.addToCart(cars[0])
    cart.addToCart(cars[1])
    cart.removeFromCart(0,cars[0].price)
    cart.removeFromCart(1,cars[1].price)
    expect(cart.total).toEqual(0)
  })

  test("checkout()",()=>{
    cart.addToCart(cars[0])
    cart.addToCart(cars[1])
    cart.addToCart(cars[2])
    cart.checkout()
    expect(cart.total).toEqual(0)
    expect(cart.cart.length).toEqual(0)
  })
})

