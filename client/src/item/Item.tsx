// Types
import { AllCoinType } from '../App';
// Styles
import { Wrapper } from './Item.styles';
import { Button } from '@chakra-ui/react'


type Props = {
  item: AllCoinType;
  handleMarketData: (clickedItem: AllCoinType) => void;
  hideCoin: (clickedItem: number) => void;
};

const hideCoin:any = () => [

]


const Item: React.FC<Props> = ({ item, handleMarketData, hideCoin }) => (
  <Wrapper >
    <div onClick={() =>  handleMarketData(item)   }> 
      <h3>Name: {item.name}</h3>
      <p>Symbol: {item.symbol}</p>
      <h3>Price: ${item.price_usd}</h3>
    </div>
   <Button onClick={() => hideCoin(item.id)}>Hide Coin  </Button>
  </Wrapper>
  
);


export default Item;