import Wrapper from './_assets/wrappers/Shop_xx';
import Link from 'next/link';
import { fetchCategories_28 } from '@/actions/shop.action_28';
import { prisma } from '@/lib/prisma';

const StaticPage_28 = async () => {
  const categories = await fetchCategories_28();
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> CHUANFU, 213410128 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            {categories?.map((item: any) => {
              const { cid, cname, size, image_url } = item;
              return (
                <div key={cid} className={`${size ? size : ''} menu-item`}>
                  <img
                    className='background-image'
                    src={image_url || ''}
                    alt={cname || 'category'}
                  />
                  <Link
                    href={`/mid_28/${cname?.toLowerCase()}`}
                    className='content'
                  >
                    <h1 className='title'>{cname?.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaticPage_28;
