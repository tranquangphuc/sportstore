let faker = require('faker');
let categories = ['Watersports', 'Soccer', 'Chess', 'Running'];
let products = [];
let orders = [];
faker.seed(100);

for (let i = 0; i < 503; i++) {
  let category = faker.helpers.randomize(categories);
  products.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category} ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price())
  });
}

for (let i = 0; i < 103; i++) {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let order = {
    id: i,
    name: `${firstName} ${lastName}`,
    email: faker.internet.email(firstName, lastName),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    zip: faker.address.zipCode(),
    skipped: faker.random.boolean(),
    products: []
  };
  let productCount = faker.random.number({ min: 1, max: 9 });
  let productIds = [];
  while (productIds.length < productCount) {
    let candidateId = faker.random.number({ min: 1, max: products.length });
    if (!productIds.includes(candidateId)) {
      productIds.push(candidateId);
    }
  }
  productIds.forEach(pid =>
    order.products.push({
      product_id: pid,
      quantity: faker.random.number({ min: 1, max: 9 })
    })
  );
  orders.push(order);
}

module.exports = () => ({ categories, products, orders });
