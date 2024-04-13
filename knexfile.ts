/**
 * Retrieve the database connection from the application configuration.
 * @returns {Object} The database connection object.
 */
import { db } from './src/config/app-config'

export default async function () {
  // Return the database connection object
  return db
}
