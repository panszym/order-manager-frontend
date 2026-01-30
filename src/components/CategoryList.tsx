import { Link } from "react-router-dom";
import type { Category } from "../model/CategoryModel";

export const CategoryList: React.FC<{ categories: Category[] }> = (props) => {
  return (
    <>
      {props.categories.map((categories) => (
        <Link
          key={categories.categoryName}
          to={`/categories/categoryName/${categories.categoryName}`}
          style={{ textDecoration: "none" }}
        >
          <div
            key={categories.id}
            className="card mt-3 shadow p-3 mb-1 bg-body rounded"
          >
            <div className="row g-0">
              <div className="col-md-3">
                <div className="container text-start">
                  <p>{categories.categoryName}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
