import React, {useState} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { AllCoinType } from '../App'; 
import Grid from '@material-ui/core/Grid'
import Item from '../Item/Item';

const GET_ALLCOINS = gql`
  query{
    allCoins {
        id
        name
        symbol
        price_usd
    }
}
`;


export default function Homepage() {
    const [modalCoinId, setModalCoinId] = useState<number>();
    const { loading, error, data } = useQuery(GET_ALLCOINS)
    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error :(</p>

    let handleMarketData = (clickedItem: AllCoinType) => {
        setModalCoinId(clickedItem.id)
        console.log(modalCoinId);
        localStorage.setItem("coinID", JSON.stringify(clickedItem.id))
        // <Link to='/MarketData' >MarketData</Link>
    }
    
    let hideCoin = (clickedItemID: number) => {

    }

    return (
                        <Grid container spacing={3}> 
            {data.allCoins.map((item: AllCoinType, name: AllCoinType) => (
                <Grid item key={item.id} xs={12} sm={3} md={2} >
                   
                    {/* {modalCoinId? <MarketData id={modalCoinId}/> : null } */}
                        <Item item={item} handleMarketData={handleMarketData} hideCoin={hideCoin}>
                            
                        </Item>
                       
                    
                </Grid>
            ))}
                
            {/* {modalCoinId ? (<MyModal />) : null} */}
        </Grid>

    )     
}