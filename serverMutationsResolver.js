const storeProduct = ({ product }, { db }) =>
  db
    .get('products')
    .insert(product)
    .value();
const updateProduct = ({ product }, { db }) =>
  db
    .get('products')
    .updateById(product.id, product)
    .value();
const deleteById = ({ id }, { db }) =>
  db
    .get('products')
    .removeById(id)
    .value();
const shipOrder = ({ id, shipped }, { db }) =>
  db
    .get('orders')
    .updateById(id, { shipped: shipped })
    .value();
module.exports = { storeProduct, updateProduct, deleteById, shipOrder };
