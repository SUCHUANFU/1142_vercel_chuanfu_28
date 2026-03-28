import { removeUser } from '@/actions/userAction_28';

const DeleteButton_28 = ({ id }: { id: number }) => {
  // 使用 bind 預傳 id 參數給 removeUser 函式
  const removeUserWithId = removeUser.bind(null, id);

  return (
    <form action={removeUserWithId}>
      {/* 隱藏欄位，可用於傳遞其他非關鍵資訊 */}
      <input type='hidden' name='name' value='random' />
      
      <button
        type='submit'
        className='bg-red-500 text-white p-2 text-xs rounded'
      >
        delete
      </button>
    </form>
  );
};

export default DeleteButton_28;