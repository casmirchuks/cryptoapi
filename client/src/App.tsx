import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AllCoinsPage from './routes/AllCoin';
import MarketDatePage from './routes/MarketData';
import HideButton from './Components/Button'
import { Center} from '@chakra-ui/react'


export type AllCoinType = {
  id: number,
  name: string,
  symbol: string,
  price_usd: string
}

export type marketDataType = {
  name: string,
  base: string,
  quote: string,
  price: number,
  price_usd: number,
  volume: number,
  volume_usd: number
}

const client = new ApolloClient ({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

function App () {

  const coinId: any  = localStorage.getItem('coinID')
  const cId = parseInt(coinId)
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <span className='heading'> CryptoApi By Cas_Uzi</span>

        <Center h='100px' >
        <HideButton />
        </Center>

        <AllCoinsPage  />
        <MarketDatePage id={cId}/>
        
       </div>
    </ApolloProvider>

  );
}
export default App;
