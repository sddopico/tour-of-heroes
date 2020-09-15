import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Class props
  heroes: Hero[];

  // Constructor
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Get heroes array on init
  ngOnInit(): void {
    this.getHeroes();
  }



  // Component methods

  // Get hero array from HeroService - instantiated in ngOnInit()
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // Add user-input hero to heroes db
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}

