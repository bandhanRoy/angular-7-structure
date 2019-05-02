import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.model';


@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipie>();

  recipies: Recipie[] = [
    new Recipie('A Test Recipe', 'Simple recipe', 'https://i0.wp.com/images.mapsofindia.com/my-india/2019/03/5-quick-food-recipes-for-hostel-life.jpg?resize=665%2C348&ssl=1'),
    new Recipie('A Test Recipe', 'Simple recipe', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipie){
    this.recipeWasSelected.emit(recipe);
  }
}
