import { Component, OnInit } from '@angular/core';
import { Hero } from './herodata';
import { hero } from './hero';
import { HeroServicesService } from '../hero-services.service';

@Component({
  selector: 'app-herooo',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  constructor(private heroService: HeroServicesService){

  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    this.getHero = this.heroService.getHeroList
  }
 
  Heros: hero[] = []
  selectedHero?: hero
  onSelect(hero: hero): void{
    this.selectedHero = hero
  }

}
