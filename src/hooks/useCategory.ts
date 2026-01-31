import { useEffect, useState } from "react";

import { getCategory } from "../services/category-service";
import type { Category } from "../model/CategoryModel";


const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getCategory()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { categories, error, isLoading };
};

export default useCategory;
