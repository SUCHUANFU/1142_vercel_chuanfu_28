// 'use client';
import { ModeToggle } from './ModeToggle';
import LogoStore_28 from './LogoStore_28';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import StoreSignInOutAuth_28 from './StoreSignInOutAuth_28';

const NavbarStore_28 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_28 />
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <Button variant='secondary'>TKUdemo_28</Button>
        </Link>
        <ModeToggle />
        <StoreSignInOutAuth_28 />
      </div>
    </div>
  );
};
export default NavbarStore_28;
