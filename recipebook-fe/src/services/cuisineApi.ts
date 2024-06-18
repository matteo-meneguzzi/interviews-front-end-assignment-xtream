import { Cuisine } from '../types/cuisine';
import { handleApiRequest } from './helper';

export const getCuisineList = async (): Promise<Cuisine[]> =>
{
    return handleApiRequest<Cuisine[]>({
        method: 'GET',
        url: '/cuisines',
    });
};

export const getCuisine = async (): Promise<Cuisine[]> =>
{
    return handleApiRequest<Cuisine[]>({
        method: 'GET',
        url: '/cuisines',
    });
};


export const createCuisine = async (cuisine: Cuisine): Promise<Cuisine> =>
{
    return handleApiRequest<Cuisine>({
        method: 'POST',
        url: '/cuisines',
        data: cuisine,
    });
};

export const updateCuisine = async (cuisine: Cuisine): Promise<Cuisine> =>
{
    return handleApiRequest<Cuisine>({
        method: 'PUT',
        url: `/cuisines/${ cuisine.id }`,
        data: cuisine,
    });
};

export const deleteCuisine = async (id: number): Promise<void> =>
{
    return handleApiRequest<void>({
        method: 'DELETE',
        url: `/cuisines/${ id }`,
    });
};
