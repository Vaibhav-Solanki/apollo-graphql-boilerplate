import Base from './base'
import { CustomerType } from '../../types/repository'

class CustomerRepo extends Base {
  async findUserById (id: number): Promise<CustomerType | null> {
    return await this.findById(id)
  }

  async registerUser ({ email, uid }: {email: string; uid: string}): Promise<CustomerType> {
    return await this.insert({ email, uid })
  }
}

export default CustomerRepo
