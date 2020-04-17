import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  constructor() { }

  givePositon(posX:number, posY:number){
    console.log(posX,"X from covpostion service ");
    console.log(posY,"Y from covpostion service ");
  }

}
