import Base from './base'

class ProductImagesRepo extends Base {
  async findByProductId (productId) {
    return await this.model.query().where('product_id', productId)
  }
}

export default ProductImagesRepo
