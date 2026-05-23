import SectionTitle from '../global/SectionTitle';
import { fetchFeaturedProducts } from '../../_utils/action';
import ProductsGrid_28 from '../products/ProductsGrid_28';
import EmptyList from '../global/EmptyList';

const FeaturedProducts_28 = async () => {
  const featuredProducts = await fetchFeaturedProducts();
  console.log('featuredProducts', featuredProducts);
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid_28 products={featuredProducts} />
    </section>
  );
};
export default FeaturedProducts_28;
