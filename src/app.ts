import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { getConnection } from './connection'
import { CreateAkumaNoMiType } from './resolvers/CreateAkumaNoMiType'
import { GetAkumaNoMiTypes } from './resolvers/GetAkumaNoMiTypes'


const main = async () => {
	const connection = await getConnection()

	const schema = await buildSchema({
		resolvers: [CreateAkumaNoMiType, GetAkumaNoMiTypes]
	})

	const server = new ApolloServer({
		schema,
		context: ({ req, res }) => ({ req, res }),
		debug: true,
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground(),
		],
	})

	const app = express()
	const port = 3000

	await server.start()

	server.applyMiddleware({ app })

	app.listen({ port }, () => {
		console.log(
			`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
		)
	})
}

main()