import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 3),
    new Ingrediant('Mango', 3)
  ]

  constructor() { }

  ngOnInit() {
  }

}
