import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Class props
  private heroesURL = 'api/heroes';

  // Constructor - instantiates messageService
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // Component methods
  // Returns observable of heroes array
  getHeroes(): Observable<Hero[]> {
    // TODO: send message _after_ fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http
      .get<Hero[]>(this.heroesURL)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  // Takes id: number as a param, returns observable of specific hero by id in array
  getHero(id: number): Observable<Hero> {
    // TODO: send message _after_ fetching hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }

  // Private log method for messageService instance
  // tslint:disable-next-line: typedef
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let app keep running by returning an empty result
      return of(result as T);
    };
  }
}
