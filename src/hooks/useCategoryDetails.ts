import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Category } from "../model/CAtegoryModel";
import { getCategoryByCategoryName } from "../services/category-service";

export const useCategoryDetails = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [categories, setCategories] = useState<Category | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getCategoryByCategoryName(categoryName!)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { categories, errors, isLoading, setLoader, setErrors };
};
