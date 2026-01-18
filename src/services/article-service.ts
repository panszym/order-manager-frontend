
import apiArticle from "../config/ApiArticle"
import type { Article } from "../model/ArticleModel"

export const getArticles = () => {
    return apiArticle.get<Article []>('/article')
}