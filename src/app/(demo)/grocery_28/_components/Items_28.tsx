import SingleItem from './SingleItem_28';
import { Item } from '../page'; // 從主頁面匯入型別

interface ItemsProps {
  items: Item[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const Items = ({ items, removeItem, editItem }: ItemsProps) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
