import Base from './base'

class ProductRepo extends Base {
  async getProducts (query) {
    return await this.model.query().modify(builder => {
      if (query.category_id) builder.where('category_id', query.category_id)
      if (query.brand_id) builder.where('category_id', query.category_id)
    })
  }

  async findProductByBrand (brandId) {
    return await this.model.query().where('brand_id', brandId)
  }

  reserveStock (product, qty) {
    return this.updateAndFetch(product, {
      stock_quantity: product.stock_quantity - qty,
      reserved_quantity: product.reserved_quantity + qty
    })
  }
}

export default ProductRepo
