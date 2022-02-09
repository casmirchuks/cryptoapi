import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Homepage from './Pages/Homepage';


export type AllCoinType = {
  id: number,
  name: string,
  symbol: string,
  price_usd: string
}

const client = new ApolloClient ({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

function App () {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <span className='heading'> CryptoApi By CasUzi</span>
        <Homepage  />
       </div>
    </ApolloProvider>

  );
}
export default App;
