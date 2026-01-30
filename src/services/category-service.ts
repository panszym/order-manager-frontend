import apiCategory from "../config/ApiCategory";
import type { Category } from "../model/CategoryModel";

export const getCategory = () => {
  return apiCategory.get<Category[]>("");
};

export const getCategoryByCategoryName = (categoryName: string) => {
  return apiCategory.get<Category>(`categoryName/${categoryName}`);
};

export const getCategoryById = (categoryId: string) => {
  return apiCategory.get<Category>(`id/${categoryId}`);
};

export const deleteCategory = (categoryName: string) => {
  return apiCategory.delete(`categoryName/${categoryName}`);
};

export const updateCategory = (categoryName: string, category: Category) => {
  return apiCategory.patch<Category>(`categoryName/${(categoryName)}`, category);
};

export const addCategory = (category: Category) => {
  return apiCategory.post<Category>(``, category);
};
