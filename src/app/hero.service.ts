import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Constructor - instantiates messageService
  constructor(private messageService: MessageService) { }


  // Component methods
  // Returns observable of heroes array
  getHeroes(): Observable<Hero[]> {
    // TODO: send message _after_ fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  // Takes id: number as a param, returns observable of specific hero by id in array
  getHero(id: number): Observable<Hero> {
    // TODO: send message _after_ fetching hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
