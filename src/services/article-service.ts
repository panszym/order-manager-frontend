
import apiArticle from "../config/ApiArticle"
import type { Article } from "../model/ArticleModel"

export const getArticles = () => {
    return apiArticle.get<Article []>('')
}

export const getArticleByOrderCode = (orderCode: string) => {
    return apiArticle.get<Article>(`orderCode/${orderCode}`);
}

export const deleteArticle = (orderCode: string) => {
  return apiArticle.delete(`orderCode/${orderCode}`);
};