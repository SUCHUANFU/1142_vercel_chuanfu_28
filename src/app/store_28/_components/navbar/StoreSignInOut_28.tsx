'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';

import { LucideAlignLeft, User } from 'lucide-react';
import UserIcon_28 from './UserIcon_28';
import Link from 'next/link';
import { links, linksAdmin, adminLinks } from './links';
import StoreSignOut_28 from './StoreSignOut_28';

// let isAdminUser = true; // 假設這裡是從後端獲取的使用者角色資訊
interface StoreSignInOutProps {
  isAdminUser: boolean;
}

const StoreSignInOut_28 = ({ isAdminUser }: StoreSignInOutProps) => {
  const { isSignedIn, user } = useUser();
  console.log('isSignedIn:', isSignedIn);
  console.log('isAdminUser:', isAdminUser);
  console.log('user:', user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>
          <LucideAlignLeft className='w-6 h-6' />
          {isSignedIn && user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt='User Avatar'
              className='w-6 h-6 rounded-full'
            />
          ) : (
            <UserIcon_28 />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Show when='signed-out'>
          {/* 登出按鈕 */}
          <DropdownMenuItem>
            <SignInButton>
              <Link href='#' className='w-full text-left'>
                Login
              </Link>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* 註冊按鈕 */}
          <DropdownMenuItem>
            <SignUpButton>
              <Link href='#' className='w-full text-left'>
                Register
              </Link>
            </SignUpButton>
          </DropdownMenuItem>
        </Show>
        {/* 登入後顯示使用者資訊和登出按鈕 */}
        <Show when='signed-in'>
          <DropdownMenuGroup>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className='w-full capitalize'>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            {isAdminUser && (
              <>
                <DropdownMenuSeparator />
                {linksAdmin.map((link) => {
                  return (
                    <DropdownMenuItem key={link.href}>
                      <Link href={link.href} className='w-full capitalize'>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/* 這裡放登出按鈕 */}
          <DropdownMenuItem asChild className='p-0'>
            <StoreSignOut_28 />
          </DropdownMenuItem>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StoreSignInOut_28;

{
  /* <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem> */
}
