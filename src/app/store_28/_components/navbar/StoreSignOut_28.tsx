import { Button } from '@/components/ui/button';
import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';

const StoreSignOut_28 = () => {
  const handleLogout = () => {
    // 在這裡可以執行任何需要在登出前完成的操作，例如清除本地存儲、重置狀態等
    toast.success('Successfully logged out!');
  };
  return (
    <SignOutButton redirectUrl='/store_28'>
      {/* 要確認classname */}
      <Button
        variant='ghost'
        className='w-full justify-start font-normal'
        onClick={handleLogout}
      >
        Logout
      </Button>
    </SignOutButton>
  );
};
export default StoreSignOut_28;
