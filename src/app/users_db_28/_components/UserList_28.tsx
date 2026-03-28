import { fetchUsers } from "@/actions/userAction_28";

const UserList_28 = async () => {
  const users = await fetchUsers();
  console.log('users', users);
  
  return (
    <>
      {users?.map((user) => (
        <h3 key={user.id}>{user.email}</h3>
      ))}
    </>
  );
};

export default UserList_28;