import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroServicesService } from '../hero-services.service';
import { Hero } from '../hero/herodata';
import { hero } from '../hero/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private location: Location,private heroService: HeroServicesService) { }

  ngOnInit(): void {
  }
 @Input() hero?: hero

 getHero(): void{
  const id = Number(this.activatedRoute.snapshot.paramMap.get(`id`))
  this.heroService.getHero(id)
  .subscribe(data=>this.hero=data)
 }
}
