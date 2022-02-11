// import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { marketDataType } from '../App';
import Grid from '@material-ui/core/Grid'
import MarketItem from '../Item/marketItem';

const GET_MARKET_DATA = gql`
query{
    marketData {
      name
      base
      quote
      price
      price_usd
      volume
      volume_usd
      time
    }
  }
`

export default function MarketDataPage(){
    // const [name, setName] = useState("")
    const {loading, error, data} = useQuery(GET_MARKET_DATA)

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error :(</p>

        return (
            <Grid container spacing={3}> 
            {data.marketData.map((item: marketDataType) => (
                <Grid item key={item.name} xs={12} sm={4} md={3}>
                        <MarketItem marketItem={item} />
                </Grid>
            ))}
        </Grid>
        )
}