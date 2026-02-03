import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  constructor(){
    console.log("first component is loaded.");
  }


  age = 34;

  changeage(){
    this.age++;
    return this.age;

  }

}
