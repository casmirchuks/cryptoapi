// Types
import { marketDataType } from '../App';
// Styles
import { Wrapper } from './Item.styles';
// import { Button } from '@chakra-ui/react'



type Props = {
  marketItem: marketDataType;
};


const marketItem: React.FC<Props> = ({ marketItem }) => (
  <Wrapper>
    <div>
      <h3>Name: {marketItem.name}</h3>
      <p>Base: {marketItem.base}</p>
      <h3>Price: ${marketItem.price_usd}</h3>
    </div>
    {/* <Button onClick={() => handleMarketData(item)}>Hide Coin</Button> */}
  </Wrapper>
);



export default marketItem;