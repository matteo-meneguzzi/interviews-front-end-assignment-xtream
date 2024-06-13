import useFetchData from './useFetchData';
import { getRecipeList } from '../services/api';
import { Recipe } from '../types/recipe';

export const useGetRecipes = () =>
{
    return useFetchData<Recipe[]>(getRecipeList);
};
