import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  schranke:number=80;

  constructor() { }

  givePositon(posX:number, posY:number){
    if(posX>this.schranke)
    return "permission not" + posX;
    // console.log(posX,"X from covpostion service ");
    // console.log(posY,"Y from covpostion service ");
  }
  fetchLines(line:number){
    console.log(line,"line");
    this.schranke = line;

  }

}
