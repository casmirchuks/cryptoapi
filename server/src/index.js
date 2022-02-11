const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const axios = require('axios');


const resolvers = {
    Query: {
        allCoins: async () => {
            const response = await axios.get('https://api.coinlore.net/api/tickers/')
            const allCoinList = [];
            response.data.data.map((eachCoin) => allCoinList.push(eachCoin))
            return allCoinList;
        },
        marketData: async () => {
            const response = await axios.get(`https://api.coinlore.net/api/coin/markets/?id=90`)
            const marketDataList = [];
            console.log(marketDataList);
            response.data.map((eachData) => marketDataList.push(eachData))
            return marketDataList;
        }
    }
}
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(() => {
    console.log(`Server is running on port 4000 `);
})