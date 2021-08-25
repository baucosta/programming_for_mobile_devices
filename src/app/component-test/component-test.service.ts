import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentTestService {

  constructor() {
    console.log('oi');
   }

  printMessage(): void {
    console.log('one message');
  }
}
