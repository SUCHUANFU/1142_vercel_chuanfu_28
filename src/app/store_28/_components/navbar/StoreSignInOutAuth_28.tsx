import { auth } from '@clerk/nextjs/server';
import StoreSignInOut_28 from './StoreSignInOut_28';

const StoreSignInOutAuth_28 = async () => {
  const { userId } = await auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID; // 替換為實際的管理員用戶ID
  return <StoreSignInOut_28 isAdminUser={isAdminUser} />;
};

export default StoreSignInOutAuth_28;
