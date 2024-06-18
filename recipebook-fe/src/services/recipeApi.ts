import { Recipe } from '../types/recipe';
import { handleApiRequest } from './helper';

export const getRecipeList = async (): Promise<Recipe[]> =>
{
    return handleApiRequest<Recipe[]>({
        method: 'GET',
        url: '/recipes',
    });
};

export const getRecipe = async (): Promise<Recipe[]> =>
{
    return handleApiRequest<Recipe[]>({
        method: 'GET',
        url: '/recipes',
    });
};


export const createRecipe = async (recipe: FormData): Promise<Recipe> =>
{
    return handleApiRequest<Recipe>({
        method: 'POST',
        url: '/recipes',
        data: recipe,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const updateRecipe = async (recipe: Recipe): Promise<Recipe> =>
{
    return handleApiRequest<Recipe>({
        method: 'PUT',
        url: `/recipes/${ recipe.id }`,
        data: recipe,
    });
};

export const deleteRecipe = async (id: number): Promise<void> =>
{
    return handleApiRequest<void>({
        method: 'DELETE',
        url: `/recipes/${ id }`,
    });
};
