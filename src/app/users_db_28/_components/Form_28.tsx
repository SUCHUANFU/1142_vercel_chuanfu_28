import {createUser} from '@/actions/userAction_28';

const Form_28 = () => {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className='text-2xl capitalize'>create user</h2>
      
      {/* Name 欄位 */}
      <label htmlFor='name' className='font-bold'>
        Name
      </label>
      <input 
        type='text' 
        name='name' 
        required 
        className={inputStyle} 
      />

      {/* Email 欄位 */}
      <label htmlFor='email' className='font-bold'>
        Email
      </label>
      <input 
        type='email' 
        name='email' 
        required 
        className={inputStyle} 
      />

      {/* 提交按鈕 (雖然截圖沒拍完，但通常會有這個) */}
      <button type='submit' className={btnStyle}>
        submit
      </button>
    </form>
  );
};

// 樣式定義
const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form_28;