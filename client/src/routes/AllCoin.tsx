import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { AllCoinType } from '../App'; 
import Grid from '@material-ui/core/Grid'
import Item from '../Item/Item';

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
    // const [toggle, setToggle] = useState(false);
    const [getItem, setItem ] = useState("");
    const { loading, error, data } = useQuery(GET_ALLCOINS)
    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error :(</p>

    let handleMarketData = (clickedItem: AllCoinType) => {
        setItem(clickedItem.name);
        localStorage.setItem("coinName", clickedItem.name);
    }
    
    console.log(getItem);
    
    return (
        <Grid container spacing={3}> 
            {data.allCoins.map((item: AllCoinType, name: AllCoinType) => (
                <Grid item key={item.id} xs={12} sm={4} md={2}>
                        <Item item={item} handleMarketData={handleMarketData}/>
                </Grid>
            ))}
        </Grid>
    )     
}