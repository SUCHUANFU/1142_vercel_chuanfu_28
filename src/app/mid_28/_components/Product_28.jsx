import Wrapper from '../_assets/wrappers/Shop_xx';
import DeleteProduct_28 from './DeleteProduct_28';

const Product_28 = ({ product }) => {
  const { pid, pname, price, img_url } = product;
  return (
    <Wrapper>
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${img_url})`,
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{pname}</span>
          <span className='price'>${price}</span>
        </div>
        <DeleteProduct_28 pid={pid} />
      </div>
    </Wrapper>
  );
};
export default Product_28;
