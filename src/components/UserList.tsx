import type { User } from "../model/UserModel";

interface Props {
    users: User[]
}

export const UserList = ({users}: Props) => {
    
  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Login</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.login}</td>
              <td>{user.status}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}