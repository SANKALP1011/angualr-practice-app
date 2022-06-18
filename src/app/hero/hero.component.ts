import { Component, OnInit } from '@angular/core';
import { Hero } from './herodata';
import { hero } from './hero';


@Component({
  selector: 'app-herooo',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  ngOnInit(): void {
  }
 
  Heros = Hero
  selectedHero?: hero
  onSelect(hero: hero): void{
    this.selectedHero = hero
  }

}
