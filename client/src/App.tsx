import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery} from '@apollo/client';

const GET_ALLCOINS = gql`
  query{
    allCoins {
      name
      symbol
    }
  }
`;


const client = new ApolloClient ({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

const App: React.FC = () =>{
  const {loading, error, data } = useQuery(GET_ALLCOINS, {variables: {id: "80"}})

  if (loading) return `Loading...`
  if (error) return `Error! ${error.message}`;
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <span className='heading'> CryptoApi By CasnUzi</span>
      </div>
    </ApolloProvider>

  );
}

export default App;
