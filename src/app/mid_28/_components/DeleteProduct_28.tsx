import { deleteProduct_28 } from '@/actions/shop.action_28';

type DeleteProductProps = {
  pid: number;
};

const DeleteProduct_28 = ({ pid }: DeleteProductProps) => {
  return (
    <form action={deleteProduct_28}>
      <input type='hidden' name='pid' value={pid} />
      <button
        type='submit'
        className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded w-full mt-2'
      >
        delete
      </button>
    </form>
  );
};
export default DeleteProduct_28;
