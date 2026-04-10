
import SingleItem_28 from './SingleItem_28';
import { fetchGrocery } from '@/actions/grocery.action_28';

const Items_28 = async() => {
  const items = await fetchGrocery();
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem_28
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
export default Items_28;
