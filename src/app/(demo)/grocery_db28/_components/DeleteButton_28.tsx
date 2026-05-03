import { removeGrocery_28 } from '@/actions/grocery.action_28';

const DeleteButton_28 = ({ id }: { id: string }) => {
  const removeGroceryWithId = removeGrocery_28.bind(null, id);
  return (
    <form action={removeGroceryWithId}>
      <input type='hidden' name='name' value='random' />
      <button
        type='submit'
        className='bg-red-500 text-white p-2 text-xs rounded capitalize hover:bg-red-700'
      >
        delete
      </button>
    </form>
  );
};

export default DeleteButton_28;
