import Product_28 from '../_components/Product_28';
import Wrapper from '../_assets/wrappers/Shop_xx';

import { prisma } from '@/lib/prisma';

type Product = {
  pid: number;
  pname: string | null;
  cat_id: number | null;
  price: number | null;
  img_url: string | null;
  remote_img_url: string | null;
};

const FetchProductsByCategory_28 = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const categoryData = await prisma.category_28.findFirst({
    where: {
      cname: { equals: category, mode: 'insensitive' },
    },
  });

  const products = categoryData
    ? await prisma.shop_28.findMany({ where: { cat_id: categoryData.cid } })
    : [];
  // console.log(`Products for ${category}:`, products);
  // console.log('category param:', category);
  // console.log('Products by category :', shop_xx);
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4>Chuanfu, 213410128 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div
            className='items'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
            }}
          >
            {products.map((product) => (
              <Product_28 key={product.pid} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchProductsByCategory_28;
