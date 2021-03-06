import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://cdn.editorchoice.com/wp-content/uploads/2019/09/fast-food.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://cdn.editorchoice.com/wp-content/uploads/2019/09/fast-food.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
