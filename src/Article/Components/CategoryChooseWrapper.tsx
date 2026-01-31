import useCategory from "../../hooks/useCategory";
import type { Category } from "../../model/CategoryModel";
import { ArticleCategoryChoose } from "./ArticleCategoryChoose";

interface Props {
  formik: any;
}

export const CategoryChooseWrapper = ({ formik }: Props) => {
  const { categories, isLoading, error } = useCategory();

  if (isLoading) return <p>Ładowanie kategorii...</p>;
  if (error) return <p className="text-danger">Błąd: {error}</p>;

  const categoryNames: string[] = categories.map(
    (p: Category) => p.categoryName,
  );

  return (
    <div className="d-flex align-items-center mt-1">
      <div className="mx-3">
        <p>Kategoria:</p>
      </div>
      <div>
        <ArticleCategoryChoose
          options={categoryNames}
          id="category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.category}
          touched={formik.touched.category}
        />
      </div>
    </div>
  );
};
