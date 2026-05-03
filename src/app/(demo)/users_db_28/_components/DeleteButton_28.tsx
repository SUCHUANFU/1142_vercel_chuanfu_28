import { removeUser } from '@/actions/user.action_28';

const DeleteButton_28 = ({ id }: { id: number }) => {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
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
