import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeBox } from './models/recipebox.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myRecipeBox: RecipeBox = new RecipeBox ([]);
  // myRecipe = new Recipe(0, "", "", [],[]);

  myRecipe = new Recipe(0, "spaghetti", "pasta with sauce", ["spaghetti noodles", "sauce", "italian herbs", "garlic"], ["boil some water in a pot", "simmer sauce in another pot", "add herbs to sauce while heating", "throw garlic in boiling water", "throw noodles in after the garlic", "boil noodles for 7-11 minutes depending on taste", "remove noodles from pot and plate with sauce over the top", "serve with garlic bread"]);

  recipeId = this.myRecipe.Id; // temporary for now so the parameters compile
  ingredient = "";
  instruction = "";
  searchTerm ="";
  hasRecipes = this.myRecipeBox.recipes.length; // not working

  addIngredientToRecipe(recipeId){
    console.log("Add Recipe");
    this.myRecipeBox.addIngredientToRecipe(this.ingredient);
  }

  addInstructionToRecipe(){
    console.log("Add Recipe");
    this.myRecipeBox.addInstructionToRecipe(this.instruction);
  }

  addRecipe(){
    console.log("this.myRecipeBox.recipes.length = " + this.myRecipeBox.recipes.length); // not working

    console.log("Save Recipe");
    // this.myRecipeBox.addRecipe(useAddForm);
    console.log("this.myRecipe" + this.myRecipe);
    console.log("this.myRecipeBox.recipes[0]" + this.myRecipeBox.recipes[0]);
    console.log("this.myRecipeBox.recipes.length" + this.myRecipeBox.recipes.length); // not working
    this.myRecipeBox.addRecipe(this.myRecipeBox, this.myRecipe, useAddForm);
    this.hasRecipes = this.myRecipeBox.recipes.length; // not working
  }

  updateRecipe(){
    console.log("Update Recipe");
    this.myRecipeBox.updateRecipe(this.myRecipe);
  }

  deleteRecipe(){
    console.log("Delete Recipe");
    this.myRecipeBox.deleteRecipe(this.myRecipe);
  }

  findRecipe(){
    console.log("Find Recipe");
    this.myRecipeBox.findRecipe(this.searchTerm);
  }

}

// var tempRecipe = new Recipe(0, "spaghetti", "pasta with sauce", ["spaghetti noodles", "sauce", "italian herbs", "garlic"], ["boil some water in a pot", "simmer sauce in another pot", "add herbs to sauce while heating", "throw garlic in boiling water", "throw noodles in after the garlic", "boil noodles for 7-11 minutes depending on taste", "remove noodles from pot and plate with sauce over the top", "serve with garlic bread"]);

// var tempRecipeBox = new RecipeBox([]);

var useAddForm = function(){
  console.log("This will be the HTML form code I think");
}
