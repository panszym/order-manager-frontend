
import apiArticle from "../config/ApiArticle"
import type { Article } from "../model/ArticleModel"

export const getArticles = () => {
    return apiArticle.get<Article []>('')
}

export const getArticleByOrderCode = (orderCode: string) => {
    return apiArticle.get<Article>(`orderCode/${orderCode}`);
}

export const getArticleById = (articleId: string) => {
    return apiArticle.get<Article>(`/${articleId}`);
}

export const deleteArticle = (orderCode: string) => {
  return apiArticle.delete(`orderCode/${orderCode}`);
};

export const updateArticle = (orderCode: string, article: Article) => {
  return apiArticle.patch<Article>(`/${orderCode}`, article);
};

export const addArticle = (article: Article) => {
  return apiArticle.post<Article>(``, article);
};


