import { createGrocery_28 } from '@/actions/grocery.action_28';

const Form_28 = () => {
  return (
    <form action={createGrocery_28}>
      <h4>grocery bud (DB)</h4>
      <div className='form-control'>
        <input type='text ' className='form-input' name='name' />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form_28;
