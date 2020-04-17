import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  schranke:number;

  constructor() { }

  givePositon(posX:number, posY:number){
    if(posX>this.schranke)
    return "permission not" + posX;
    // console.log(posX,"X from covpostion service ");
    // console.log(posY,"Y from covpostion service ");
  }
  fetchLines(line:object){
    console.log(line[0].x,"line");
    this.schranke = line[0].x;

  }

}
