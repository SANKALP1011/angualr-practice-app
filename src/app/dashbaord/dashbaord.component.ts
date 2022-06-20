import { Component, OnInit } from '@angular/core';
import { HeroServicesService } from '../hero-services.service';
import { hero } from '../hero/hero';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {

  Heros: hero[] = []

  constructor(private heroService: HeroServicesService) { }

  ngOnInit(): void {
  }

  getTopHero(): void{
    this.heroService.getHeroList()
    .subscribe((data=> this.Heros = data))
  }

}
