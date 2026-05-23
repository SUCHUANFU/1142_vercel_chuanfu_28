'use client';
import Link from 'next/link';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';

const NavbarMain_28 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <Link href='/'>
        <div className='text-[18px'>TKUdemo_28</div>
      </Link>
      <Menubar className='w-72'>
        <MenubarMenu>
          <MenubarTrigger>Demo</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/counter_28'>Counter_28</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/tours_28'>Tours_28</Link>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <Link href='/users_db_28'>Users_db_28</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_28'>Grocery_28</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_db16'>Grocery_db16</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz1</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/quiz1_28/blog_28'>Quiz1: blog_28</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/quiz1_28/blog_db_28'>Quiz1: blog_db_28</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Midterm</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/mid_28'>Midterm_28</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz2</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value='benoit'>
              <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
              <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
              <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Edit...</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Final</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarCheckboxItem>Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Full URLs</MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className='flex items-center gap-4'>
        <Link href='/store_28'>
          <Button variant='outline'>Store</Button>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
export default NavbarMain_28;
