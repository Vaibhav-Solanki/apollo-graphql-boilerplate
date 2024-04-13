import { Model } from 'objection'
import { getModel } from '../db'

class BaseModel extends Model {
  static getModel = getModel
}

export default BaseModel
