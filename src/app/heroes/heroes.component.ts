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
  selectedHero: Hero;

  // Constructor
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Get heroes array on init
  ngOnInit(): void {
    this.getHeroes();
  }


  // Handle hero selection
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  // Get hero array from HeroService - instantiated in ngOnInit()
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

