import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // Class props
  messages: string [] = [];

  constructor() { }

  // Add a message to messages cache
  // tslint:disable-next-line: typedef
  add(message: string) {
    this.messages.push(message);
  }

  // Clear entire messages cache
  // tslint:disable-next-line: typedef
  clear() {
    this.messages = [];
  }
}
