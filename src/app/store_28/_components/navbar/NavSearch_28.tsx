'use client';

import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const NavSearch_28 = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || '',
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/store_28/products_28?${params.toString()}`);
  }, 500);

  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xs border-gray dark:bg-muted'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};

export default NavSearch_28;
