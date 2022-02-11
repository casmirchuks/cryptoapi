const {gql} = require('apollo-server');

const typeDefs = gql`
  type AllCoin {
    id: ID!
    symbol: String!
    name: String!
    nameid: String!,
    rank: Int,
    price_usd: String!,
    percent_change_24h: String!,
    percent_change_1h: String!,
    percent_change_7d: String!,
    price_btc: String!,
    market_cap_usd: String!,
    volume24: Float,
    volume24a: Float,
    csupply: Float,
    tsupply: Float,
    msupply: Float,
    info: [Info!]!
  }

  type MarketData {
    name: String!,
    base: String!,
    quote: String!,
    price: Float,
    price_usd: Float,
    volume: Float,
    volume_usd: Float,
    time: Int
  }

  type Info {
    coins_num: Int
    time: Int
  }

  type Query {
    allCoins: [AllCoin!],
    marketData: [MarketData!]!
  }
  
`;

module.exports = typeDefs;