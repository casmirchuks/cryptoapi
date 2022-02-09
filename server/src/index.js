const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const axios = require('axios');

const resolvers = {
    Query: {
        allCoins: async () => {
            const allCoinList = [];
            const response = await axios.get('https://api.coinlore.net/api/tickers/')
            // console.log(response.data);
            response.data.map(obj => {allCoinList.push(obj)})
            return allCoinList;
        }
    }
}
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(() => {
    console.log(`Server is running on port 4000 `);
})