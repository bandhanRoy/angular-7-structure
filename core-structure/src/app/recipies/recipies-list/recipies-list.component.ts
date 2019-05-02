import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie('A Test Recipe', 'Simple recipe', 'https://i0.wp.com/images.mapsofindia.com/my-india/2019/03/5-quick-food-recipes-for-hostel-life.jpg?resize=665%2C348&ssl=1'),
    new Recipie('A Test Recipe', 'Simple recipe', 'https://i0.wp.com/images.mapsofindia.com/my-india/2019/03/5-quick-food-recipes-for-hostel-life.jpg?resize=665%2C348&ssl=1')
  ];

  constructor() { }

  ngOnInit() {
  }

}
