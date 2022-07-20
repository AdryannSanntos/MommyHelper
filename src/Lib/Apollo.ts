import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5svucdj1rh201t81x8v3kjk/master',
  cache: new InMemoryCache()
})
