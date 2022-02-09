import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { AllCoinType } from '../App'; 
import Grid from '@material-ui/core/Grid'
import Item from '../item/Item';

const GET_ALLCOINS = gql`
  query{
    allCoins {
      name
      symbol
      price_usd
    }
}
`;


export default function Homepage() {
    const { loading, error, data } = useQuery(GET_ALLCOINS)
    
    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error :(</p>

    console.log(data.allCoins);
        
    return (
        <Grid container spacing={3}>
            {data.allCoins.map((item: AllCoinType) => (
                <Grid item key={item.id} xs={12} sm={4} >
                    <Item item={item} />
                </Grid>
            ))}
        </Grid>
    )     
}