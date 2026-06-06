type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/store_28', label: 'StoreHome' },
  { href: '/store_28/about_28', label: 'about_28' },
  { href: '/store_28/products_28', label: 'products_28' },
  { href: '/store_28/favorites_28', label: 'favorites_28' },
  { href: '/store_28/reviews_28', label: 'reviews_28' },
  { href: '/store_28/cart_28', label: 'cart_28' },
  { href: '/store_28/orders_28', label: 'orders_28' },
];

export const linksAdmin: NavLink[] = [
  { href: '/store_28/admin_28/sales_28', label: 'dashboard_28' },
];

export const adminLinks: NavLink[] = [
  { href: '/store_28/admin_28/sales_28', label: 'sales_28' },
  { href: '/store_28/admin_28/products_28', label: 'my products_28' },
  // { href: '/store_28/admin_28/products_28/create', label: 'create product_28' },
];
