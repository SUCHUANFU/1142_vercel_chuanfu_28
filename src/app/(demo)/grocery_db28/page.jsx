import Form_28 from './_components/Form_28.jsx';
import Items_28 from './_components/Items_28.tsx';
// import { nanoid } from 'nanoid';
// import { ToastContainer, toast } from 'react-toastify';

import Wrapper from '../_assets/wrapper/Grocery_28.jsx';

const GroceryPage_28 = () => {
  return (
    <Wrapper>
      <section className='section-center'>
        {/* <ToastContainer position='top-center' /> */}
        <Form_28 />
        <Items_28 />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_28;
