export class Recipe{

  constructor (public Id: number, public name: string, public description: string, public ingredients: string[], public instructions: string[]) {
  }

  addIngredientToRecipe(id, myTempRecipe, ingredient){
    console.log("got into addIngredientToRecipe in the recipe");
    myTempRecipe.ingredients.push(ingredient);
  }

//methods

}
