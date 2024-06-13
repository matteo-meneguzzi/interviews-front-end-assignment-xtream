export interface NewRecipe
{
    title: string;
}

export interface UpdateRecipe
{
    id: number;
    title?: string;
    completed?: boolean;
}

export interface Recipe
{
    id: string;
    name: string;
    ingredients: string[];
    instructions: string;
    cuisineId: string;
    dietId: string;
    difficultyId: string;
    image: string;
}
