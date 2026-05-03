import { Item } from '../page';

interface SingleItemProps {
  item: Item;
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const SingleItem_28 = ({ item, removeItem, editItem }: SingleItemProps) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_28;
