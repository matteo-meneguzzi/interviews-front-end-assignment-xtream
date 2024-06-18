import { Difficulty } from '../types/difficulty';
import { handleApiRequest } from './helper';

export const getDifficultyList = async (): Promise<Difficulty[]> =>
{
    return handleApiRequest<Difficulty[]>({
        method: 'GET',
        url: '/difficulties',
    });
};

export const getDifficulty = async (): Promise<Difficulty[]> =>
{
    return handleApiRequest<Difficulty[]>({
        method: 'GET',
        url: '/difficulties',
    });
};


export const createDifficulty = async (diffiDifficulty: Difficulty): Promise<Difficulty> =>
{
    return handleApiRequest<Difficulty>({
        method: 'POST',
        url: '/diffictulties',
        data: diffiDifficulty,
    });
};

export const updateDifficulty = async (diffiDifficulty: Difficulty): Promise<Difficulty> =>
{
    return handleApiRequest<Difficulty>({
        method: 'PUT',
        url: `/diffictulties/${ diffiDifficulty.id }`,
        data: diffiDifficulty,
    });
};

export const deleteDifficulty = async (id: number): Promise<void> =>
{
    return handleApiRequest<void>({
        method: 'DELETE',
        url: `/difficulties/${ id }`,
    });
};
