import { createUser } from '@/actions/user.action_28';

const Form_28 = () => {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className='text-xl capitalize'>create user</h2>
      {/* 名字輸入框 */}
      <label htmlFor='name' className='text-gray-700 font-bold'>
        Name
      </label>
      <input
        type='text'
        name='name'
        required
        placeholder='John Doe'
        className={inputStyle}
      />
      {/* 電子郵件輸入框 */}
      <label htmlFor='email' className='text-gray-700 font-bold'>
        Email
      </label>
      <input
        type='text'
        name='email'
        required
        placeholder='example@example.com'
        className={inputStyle}
      />
      {/* 提交按鈕 */}
      <button type='submit' className={btnStyle}>
        Submit
      </button>
    </form>
  );
};

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form_28;
