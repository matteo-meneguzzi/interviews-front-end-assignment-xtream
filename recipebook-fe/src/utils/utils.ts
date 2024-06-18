import { Comment } from "../types/comment";

export function calculateAverageRating (recipeId: string, comments: Comment[]): number
{
    const recipeComments = comments.filter(comment => comment.recipeId === recipeId);
    if (recipeComments.length === 0)
    {
        return 0; // or any default value if no ratings are available
    }
    const totalRating = recipeComments.reduce((sum, comment) => sum + comment.rating, 0);
    return totalRating / recipeComments.length;
}
