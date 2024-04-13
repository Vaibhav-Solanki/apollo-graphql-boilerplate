import BaseModel from './base'

class ProductImages extends BaseModel {
  static get tableName () {
    return 'product_images'
  }

  static get idColumn () {
    return 'id'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        product_id: { type: 'integer' },
        url: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' }
      }
    }
  }

  static get relationMappings () {
    const Products = this.getModel('products')
    return {
      brand: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Products,
        join: {
          from: 'product_images.product_id',
          to: 'products.id'
        }
      }
    }
  }
}

export default ProductImages
