import { Injectable } from '@angular/core';
import { Hero } from './hero/herodata';
import { hero } from './hero/hero';
import { Observable, observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServicesService {

  constructor(private MessageService: MessageService) { }

  getHeroList(): Observable<hero[]>{
    const heros = of(Hero)
    this.MessageService.add("hero static data fetched")
    return heros;
  }
}
