'use client';
import { createUser2 } from '@/actions/user.action_28';
// import { useFormStatus, useFormState } from 'react-dom';
import { useActionState } from 'react';

// // 提交按鈕
// const SubmitButton = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button type='submit' className={btnStyle} disabled={pending}>
//       {pending ? 'Submitting...' : 'Submit'}
//     </button>
//   );
// };

// const Form_28 = () => {
//   const [message, formAction] = useFormState(createUser2, null);
//   return (
//     <form action={formAction} className={formStyle}>
//       {message && <p>{message}</p>}
//       <h2 className='text-xl capitalize'>create user</h2>
//       {/* 名字輸入框 */}
//       <label htmlFor='name' className='text-gray-700 font-bold'>
//         Name
//       </label>
//       <input
//         type='text'
//         name='name'
//         required
//         placeholder='John Doe'
//         className={inputStyle}
//       />
//       {/* 電子郵件輸入框 */}
//       <label htmlFor='email' className='text-gray-700 font-bold'>
//         Email
//       </label>
//       <input
//         type='text'
//         name='email'
//         required
//         placeholder='example@example.com'
//         className={inputStyle}
//       />
//       <SubmitButton />
//     </form>
//   );
// };

// const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
// const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
// const btnStyle =
//   'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

// export default Form_28;

const Form_28 = () => {
  // 2. 使用 useActionState (名稱改了，且多了一個 isPending)
  // 第一個參數是 action，第二個是初始值
  const [message, formAction, isPending] = useActionState(createUser2, null);

  return (
    <form action={formAction} className={formStyle}>
      {/* 顯示回傳訊息 */}
      {message && <p className='text-red-500'>{message}</p>}

      <h2 className='text-xl capitalize'>create user</h2>

      {/* 名字輸入框 */}
      <label htmlFor='name' className='text-gray-700 font-bold'>
        Name
      </label>
      <input
        type='text'
        id='name'
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
        type='email' // 建議改成 email 型別，增加瀏覽器自動驗證
        id='email'
        name='email'
        required
        placeholder='example@example.com'
        className={inputStyle}
      />

      {/* 3. 直接在這裡寫按鈕，使用 isPending 取代原本的 SubmitButton 組件 */}
      <button type='submit' className={btnStyle} disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

// 樣式部分保持不變
const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form_28;
