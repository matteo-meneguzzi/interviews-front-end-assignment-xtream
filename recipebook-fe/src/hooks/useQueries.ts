import useFetchData from './useFetchData';
import { getRecipeList } from '../services/recipeApi';
import { Recipe } from '../types/recipe';
import { getCommentList } from '../services/commentApi';
import { Comment } from '../types/comment';

export const useGetRecipes = () =>
{
    return useFetchData<Recipe[]>(getRecipeList);
};

export const useGetComments = () =>
{
    return useFetchData<Comment[]>(getCommentList);
};
