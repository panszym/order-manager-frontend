import { Link } from "react-router-dom";
import type { Project } from "../model/ProjectModel";
import type { User } from "../model/UserModel";

export const UserList: React.FC<{ users: User[] }> = (props) => {
  return (
    <>
      {props.users.map((user) => (
        <Link
          key={user.login}
          to={`/users/login/${user.login}`}
          style={{ textDecoration: "none" }}
        >
        <div
          key={user.id}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <p>
                  Status: <br /> {user.status}
                  <br />
                  Rola: <br /> {user.role}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="card-title">{user.firstName}</h4>
                <h6>{user.lastName}</h6>
                <h6>{user.login}</h6>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};
