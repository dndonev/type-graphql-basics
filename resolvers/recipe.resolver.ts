import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Flavor } from "../enums/flavor.enum";
import { Recipe } from "../types/recipe";

const recipes: Recipe[] = [
	{
		id: 79880636,
		title: 'Salad',
		description: 'Such a good salad',
		signed: new Date('1992-01-01'),
		flavor: Flavor.Salty
	},
	{
		id: 78880650,
		title: 'Beef',
		description: 'Oh-la-la!',
		averageRating: 10,
		signed: new Date('1961-03-02'),
		flavor: Flavor.Bittersweet
	}];

@Resolver(Recipe)
export class RecipeResolver {
	constructor() { }

	@Query(returns => [Recipe])
	recipes() {
		return recipes;
	}

	@Mutation()
	removeRecipe(@Arg("id") id: number): boolean {
		return !!recipes.splice(recipes.map(x => x.id).indexOf(id), 1);
	}

	// @FieldResolver()
	// averageRating(@Root() recipe: Recipe) {
	// 	return recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length;
	// }
}