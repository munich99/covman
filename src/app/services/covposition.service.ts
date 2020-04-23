import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  lineXY:object;
  linePermission:boolean;

  constructor() { }

  givePositon(posX:number, posY:number, widthX:number, widthY:number){    
    this.linePermission = true;

    // check covman position
    let i:number = 0;
    while (this.lineXY[i]) {      
      let lineLeft = this.lineXY[i]["xS"];
      let lineRight = this.lineXY[i]["xS"] + this.lineXY[i]["xW"];
      let lineTop = this.lineXY[i]["yS"];
      let lineBottom = this.lineXY[i]["yS"] + this.lineXY[i]["yH"];

      if( posX >= lineLeft && posX < lineRight && posY < lineBottom && posY >= lineTop ) 
        this.linePermission = false; 
      i++;
    } 

    if( this.linePermission && posX >= 0 && posX < widthX && posY >= 0 && posY < widthY)  
      return true

  }

  fetchLines(line:object){    
    this.lineXY = line;  
  }

}
