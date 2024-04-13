import Base from './base'

class OrderRepo extends Base {
  async findOrdersByCustomerId (customerId) {
    return await this.model.query().select('*').where('customer_id', customerId)
  }
}

export default OrderRepo
