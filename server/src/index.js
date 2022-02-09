const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const axios = require('axios');

const resolvers = {
    Query: {
        allCoins: async () => {
            const response = await axios.get('https://api.coinlore.net/api/tickers/')
            const allCoinList = [];
            responseData = JSON.stringify(response);
            console.log(responseData);
            responseData.map((eachCoin) => allCoinList.push(eachCoin))
            return allCoinList;
        }
    }
}
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(() => {
    console.log(`Server is running on port 4000 `);
})