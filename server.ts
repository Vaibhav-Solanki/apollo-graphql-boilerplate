import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import * as fs from 'fs'
import * as path from 'path'

import './src/config/app-config'
import './src/firebase'

import { middleware as context } from './src/context' // Importing the context for server
import loadAllResolvers from './src/graphql/resolvers' // Importing GraphQL resolvers
import logger from './src/utils/logger'


    async function server(){
      const resolvers = await loadAllResolvers()

// Create GraphQL schema.
      const schema : any = createSchema({
        typeDefs: fs.readFileSync(
            path.join(__dirname, './src/graphql/schema.graphql'),
            'utf-8'
        ),
        resolvers
      })

// Create a Yoga instance with a GraphQL schema.
      const yoga = createYoga({
        schema,
        context
      })

// Pass it into a server to hook into request handlers.
      const server = createServer(yoga)

// Start the server and you're done!
      server.listen(process.env.PORT, () => {
        logger.info(`🚀  Server ready at http://localhost:${process.env.PORT}/graphql`) // Logging server URL
      })
    }



(async () => {
  process.on('SIGINT', () => {
    process.exit(1);
  });

  return await server().catch((e) => {
    console.error(e);
    //logger.error({message: "TOP LEVEL ERROR: " + JSON.stringify(e, Object.getOwnPropertyNames(e))});
  });
})();
