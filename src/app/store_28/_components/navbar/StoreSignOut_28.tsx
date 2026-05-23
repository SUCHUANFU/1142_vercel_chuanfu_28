import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';

const StoreSignOut_28 = () => {
  const handleLogout = () => {
    // 在這裡可以執行任何需要在登出前完成的操作，例如清除本地存儲、重置狀態等
    toast.success('Successfully logged out!');
  };
  return (
    <SignOutButton redirectUrl='/store_28'>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};
export default StoreSignOut_28;
