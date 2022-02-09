import Button from '@material-ui/core/Button';
// Types
import { AllCoinType } from '../App';
// Styles
import { Wrapper } from './Item.styles'

type Props = {
  item: AllCoinType;
};

const Item: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <p>{item.symbol}</p>
      <h3>${item.price_usd}</h3>
    </div>
  </Wrapper>
);

export default Item;