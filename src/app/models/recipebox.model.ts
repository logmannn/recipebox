import { Recipe } from './recipe.model';

export class RecipeBox{

  constructor (public recipes: Recipe[]) {

  }

  //methods

  // make a new recipe
  makeRecipe(name, description, ingredients, instructions){

  }

  addIngredientToRecipe(recipe){

  }

  addInstructionToRecipe(recipe){

  }

  addRecipe(myRecipeBox, myRecipe, useAddForm){
    console.log("got into addRecipe in the object");
    myRecipeBox.recipes.push(myRecipe);
    useAddForm();
  }

  saveRecipe(){

  }

  findRecipe(searchTerm){

  }

  updateRecipe(recipe){

  }

  deleteRecipe(recipe){

  }


}
