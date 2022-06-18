import { Injectable } from '@angular/core';
import { Hero } from './hero/herodata';
import { hero } from './hero/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServicesService {

  constructor() { }

  getHeroList(): hero[]{
    return Hero;
  }
}
