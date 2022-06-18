import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero/herodata';
import { hero } from '../hero/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() hero?: hero
}
