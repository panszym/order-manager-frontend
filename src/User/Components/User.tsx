import { UserList } from "../../components/UserList";
import useUser from "../../hooks/useUser";

const User = () => {
  const { users, error, isLoading } = useUser();
  return (
    <div className="container">
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <UserList users={users} />
    </div>
  );
};

export default User;
