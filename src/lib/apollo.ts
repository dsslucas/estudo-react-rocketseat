import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8vchm15dt01xr2hbzhned/master',
    cache: new InMemoryCache() //Faz o cache da memória. Pode ser usado o LocalStorage, etc
})