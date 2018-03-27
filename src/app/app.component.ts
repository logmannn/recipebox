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
  myRecipe = new Recipe("", "", [],[]);

  addRecipe(){
    console.log("Say hello");
    this.myRecipeBox.addRecipe(useAddForm);
  }

}

var useAddForm = function(){
  console.log("say hi!");
}
