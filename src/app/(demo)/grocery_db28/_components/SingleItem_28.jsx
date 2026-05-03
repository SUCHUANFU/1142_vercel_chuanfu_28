'use client';
import DeleteButton_28 from './DeleteButton_28';
import { editGrocery_28 } from '@/actions/grocery.action_28';

const SingleItem_28 = ({ item }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        name='completed'
        onChange={() => editGrocery_28(item.id, !item.completed)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <DeleteButton_28 id={item.id} />
    </div>
  );
};
export default SingleItem_28;
