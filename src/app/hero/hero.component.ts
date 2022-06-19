import { Component, OnInit } from '@angular/core';
import { hero } from './hero';
import { HeroServicesService } from '../hero-services.service';

@Component({
  selector: 'app-herooo',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  Heros: hero[] = [];

  constructor(private heroService: HeroServicesService){

  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    this.Heros = this.heroService.getHeroList()
 }

  selectedHero?: hero
  onSelect(hero: hero): void{
    this.selectedHero = hero
  }

}
