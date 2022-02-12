// import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { AllCoinType, marketDataType } from '../App';
import Grid from '@material-ui/core/Grid'
import MarketItem from '../Item/marketItem';

const GET_MARKET_DATA = gql`
query Query($marketDataId: ID!) {
  marketData(id: $marketDataId) {
    name
    base
    quote
  }
}

`

type MarketDataProps = {
  id: any 
}

const MarketDataPage: React.FC <MarketDataProps> = ({id})=>{
    const toSID = JSON.stringify(id)
    const {loading, error, data} = useQuery(GET_MARKET_DATA, {variables: toSID})

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

export default MarketDataPage