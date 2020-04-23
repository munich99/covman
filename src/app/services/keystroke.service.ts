import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeystrokeService {

  public _keyStrokeSource = new Subject<string>();
  keyStroke$ = this._keyStrokeSource.asObservable();

  constructor() { }

  sendMessage(message:string){
    if(message=="ArrowRight" || message=="ArrowLeft" || message=="ArrowUp" || message=="ArrowDown" ) 
      this._keyStrokeSource.next(message);    
  }

}
