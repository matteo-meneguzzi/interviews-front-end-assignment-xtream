import { Diet } from '../types/diet';
import { handleApiRequest } from './helper';

export const getDietList = async (): Promise<Diet[]> =>
{
    return handleApiRequest<Diet[]>({
        method: 'GET',
        url: '/diets',
    });
};

export const getDiet = async (): Promise<Diet[]> =>
{
    return handleApiRequest<Diet[]>({
        method: 'GET',
        url: '/diet',
    });
};


export const createDiet = async (diet: Diet): Promise<Diet> =>
{
    return handleApiRequest<Diet>({
        method: 'POST',
        url: '/diet',
        data: diet,
    });
};

export const updateDiet = async (diet: Diet): Promise<Diet> =>
{
    return handleApiRequest<Diet>({
        method: 'PUT',
        url: `/diets/${ diet.id }`,
        data: diet,
    });
};

export const deleteDiet = async (id: number): Promise<void> =>
{
    return handleApiRequest<void>({
        method: 'DELETE',
        url: `/diets/${ id }`,
    });
};
