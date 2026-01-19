import { UserList } from "../../components/UserList";
import useUser from "../../hooks/useUser";

const Dashboard = () => {
  const { users, error, isLoading } = useUser();
  return (
    <div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <UserList users={users} />;
    </div>
  );
};

export default Dashboard;
