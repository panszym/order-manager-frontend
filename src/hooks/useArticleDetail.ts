import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Article } from "../model/ArticleModel";
import { getArticleByOrderCode } from "../services/article-service";

export const useArticleDetail = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [article, setArticle] = useState<Article | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getArticleByOrderCode(orderCode!)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { article, errors, isLoading, setLoader, setErrors };
};
