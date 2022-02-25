import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { getConnection } from './connection'
import { Character } from './entity/Character'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    characters: [Character]
  }
  type Mutation {
    character(firstName?: string, middleName?: string, lastName?: string, raceName?: string): Character
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!'
    },

    characters: async () => {
        const connection = await getConnection()
        const characterRepository = connection.getRepository(Character)
        const characters = characterRepository.query(`select * from characters`)
        return characters
    },
}

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(3000)
console.log('Running a GraphQL API server at http://localhost:3000/graphql')