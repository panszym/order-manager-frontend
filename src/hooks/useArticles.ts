import { useEffect, useState } from "react";
import type { Article } from "../model/ArticleModel";
import { getArticles } from "../services/article-service";

const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getArticles()
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { articles, error, isLoading };
};

export default useArticles;
