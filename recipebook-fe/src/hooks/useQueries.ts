import useFetchData from './useFetchData';
import { getRecipeList } from '../services/recipeApi';
import { Recipe } from '../types/recipe';
import { getCommentList } from '../services/commentApi';
import { Comment } from '../types/comment';
import { Difficulty } from '../types/difficulty';
import { Cuisine } from '../types/cuisine';
import { Diet } from '../types/diet';
import { getDifficultyList } from '../services/difficultyApi';
import { getCuisineList } from '../services/cuisineApi';
import { getDietList } from '../services/dietApi';

export const useGetRecipes = () =>
{
    return useFetchData<Recipe[]>(getRecipeList);
};

export const useGetComments = () =>
{
    return useFetchData<Comment[]>(getCommentList);
};

export const useGetDifficulties = () =>
{
    return useFetchData<Difficulty[]>(getDifficultyList);
};

export const useGetCuisines = () =>
{
    return useFetchData<Cuisine[]>(getCuisineList);
};

export const useGetDiets = () =>
{
    return useFetchData<Diet[]>(getDietList);
};
