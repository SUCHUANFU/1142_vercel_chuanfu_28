import ProductsContainer_28 from '../_components/products/ProductsContainer_28';

const ProductsPage_28 = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const { layout = 'grid', search = '' } = await searchParams;
  return <ProductsContainer_28 layout={layout} search={search} />;
};

export default ProductsPage_28;
