import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  heros: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "American Captain"];
  deletedHero: string = "";

  deleteHero(): void{
    this.deletedHero = this.heros.shift() || "";
  }
}
