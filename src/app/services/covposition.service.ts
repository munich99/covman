import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  begrenzung:object={
    bR:400,
    bU:400
   }

  lineXY:object;
  linePermission:boolean;

  constructor() { }

  givePositon(posX:number, posY:number){    
    this.linePermission = true;

    let i:number = 0;
     while (this.lineXY[i]) {      
      let lineLeft = this.lineXY[i]["xS"];
      let lineRight = this.lineXY[i]["xS"] + this.lineXY[i]["xW"];
      let lineTop = this.lineXY[i]["yS"];
      let lineBottom = this.lineXY[i]["yS"] + this.lineXY[i]["yH"];

      if(  
        posX >= lineLeft && posX < lineRight     
        && posY < lineBottom && posY >= lineTop
        ) 
      {         
          this.linePermission = false;                 
      };
      i++;
    } 

    if(
      posX<this.begrenzung["bR"]  
      && this.linePermission == true
      ){ 
      return true
    }    
    
  }

  fetchLines(line:object){    
    this.lineXY = line;  
  }

}
