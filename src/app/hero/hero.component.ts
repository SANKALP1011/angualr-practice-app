import { Component, OnInit } from '@angular/core';
import { hero } from './hero';
import { HeroServicesService } from '../hero-services.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-herooo',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  Heros: hero[] = [];

  constructor(private heroService: HeroServicesService,public messageService: MessageService){

  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
   this.heroService.getHeroList()
   .subscribe(data => this.Heros = data)
 }

  selectedHero?: hero
  onSelect(hero: hero): void{
    this.selectedHero = hero
    this.messageService.add(`the selected hero is ${hero.name}`)
  }

}
