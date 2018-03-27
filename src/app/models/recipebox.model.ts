import { Recipe } from './recipe.model';

export class RecipeBox{

  constructor (public recipes: Recipe[]) {

  }

  //methods

  // make a new recipe
  makeRecipe(name, description, ingredients, instructions){

  }

  addRecipe(useAddForm){
    console.log("got into addRecipe in the object");
    useAddForm();
  }

  findRecipe(){

  }

  editRecipe(){

  }

  deleteRecipe(){

  }


}
