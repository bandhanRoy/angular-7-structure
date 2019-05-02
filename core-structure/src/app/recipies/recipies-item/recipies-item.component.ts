import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {

  @Input() recipe: Recipie;

  constructor() { }

  ngOnInit() {
  }

}
