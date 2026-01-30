import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import { CategoryList } from "../../components/CategoryList";

const Category = () => {
  const { categories, error, isLoading } = useCategory();
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <div className="d-flex">
            <Link
              to="/categories/new"
              type="button"
              className="btn btn-success"
            >
              Nowa kategoria
            </Link>
          </div>
        </div>
      </div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <CategoryList categories={categories} />
    </div>
  );
};

export default Category;
