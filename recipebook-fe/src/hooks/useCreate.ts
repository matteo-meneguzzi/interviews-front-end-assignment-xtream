import { createRecipe } from "../services/recipeApi";
import { Recipe } from "../types/recipe";
import usePostData from "./usePostData";

export const useCreateRecipe = () =>
{
    return usePostData<FormData, Recipe>(createRecipe);
};
