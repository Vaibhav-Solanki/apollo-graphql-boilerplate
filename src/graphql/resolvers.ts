/**
 * This script dynamically loads GraphQL resolver modules from files and initializes them.
 * It exports an object containing all loaded resolver functions organized by resolver type.
 */

// Import required modules
import glob from 'glob-promise'
import path from 'path'
import gqlWrapper from './gql-wrapper'
import logger from '../utils/logger'


// Generate resolver file pattern based on resolver type
const generateResolverPattern = (resolver :string):string => {
  return path.join(__dirname, `${resolver}/*.js`)
}

// Load resolver packages from files
const loadResolverPackages = async (files:string[]) => {
  return Promise.all(files.map(async (file:string) => {
    logger.info(`Loading resolver file: ${file}`)
    return await import(file)
  }))
}

// Initialize resolvers for a given resolver type
const initializeResolvers = async (resolverType) => {
  // Generate resolver file pattern
  const resolverPattern = generateResolverPattern(resolverType)
  logger.info(`Loading ${resolverType} resolvers from ${resolverPattern}`)

  // Find resolver files matching the pattern
  const files = await glob(resolverPattern)

  // Load resolver packages from files
  const packages = await loadResolverPackages(files)

  // Initialize an object to store resolvers
  const resolvers = {}

  // If resolver packages are found
  if (packages && packages.length) {
    // Iterate over each package
    for (const pkg of packages) {
      // If the resolver is an object, directly assign it to resolvers
      if (typeof pkg.resolver === 'object') {
        resolvers[pkg.name] = pkg.resolver
      } else if (typeof pkg.resolver === 'function') {
        // If the resolver is a function, wrap it with authentication check and add to resolvers object
        resolvers[pkg.name] = gqlWrapper(pkg.resolver, pkg.auth)
      }
    }
  }

  return resolvers
}

// Define resolver types
const resolverTypes = {
  Query: false,
  Mutation: false,
  Subscription: false,
  Type: true,
  Scalar: true
}
// Initialize an object to store resolvers organized by type
const typeResolvers = {}

// Load all resolvers for each resolver type
async function loadAllResolvers () {
  for (const resolverType of Object.keys(resolverTypes)) {
    const resolvers = await initializeResolvers(resolverType.toLowerCase())

    if (resolverTypes[resolverType]) {
      Object.assign(typeResolvers, resolvers)
    } else {
      typeResolvers[resolverType] = resolvers
    }
  }
  return typeResolvers
}

// Export the object containing all loaded resolver functions organized by resolver type
export default loadAllResolvers
