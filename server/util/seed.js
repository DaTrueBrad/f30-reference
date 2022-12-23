const {Product} = require('./models')

let allProducts = [
  {
    name: "Duck",
    price: 149.99,
    clearance: false
  },
  {
    name: "Door",
    price: 49.99,
    clearance: false
  },
  {
    name: "Dingo",
    price: 34995.49,
    clearance: false
  },
  {
    name: "Drywall",
    price: 4.79,
    clearance: true
  },
]

const seed = async () => {
  await Product.bulkCreate(allProducts)
}

module.exports = seed