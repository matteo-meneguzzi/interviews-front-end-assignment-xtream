import { Comment } from '../types/comment';
import { handleApiRequest } from './helper';

export const getCommentList = async (): Promise<Comment[]> =>
{
    return handleApiRequest<Comment[]>({
        method: 'GET',
        url: '/comments',
    });
};

export const getComment = async (): Promise<Comment[]> =>
{
    return handleApiRequest<Comment[]>({
        method: 'GET',
        url: '/comments',
    });
};


export const createComment = async (comment: Comment): Promise<Comment> =>
{
    return handleApiRequest<Comment>({
        method: 'POST',
        url: '/comments',
        data: comment,
    });
};

export const updateComment = async (comment: Comment): Promise<Comment> =>
{
    return handleApiRequest<Comment>({
        method: 'PUT',
        url: `/comments/${ comment.id }`,
        data: comment,
    });
};

export const deleteComment = async (id: number): Promise<void> =>
{
    return handleApiRequest<void>({
        method: 'DELETE',
        url: `/comments/${ id }`,
    });
};
