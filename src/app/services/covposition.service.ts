import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  schranke:number;

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
      console.log(this.lineXY[i]["xS"],"funkt mit schlelife");  
      if(
          posX == this.lineXY[i]["xS"]   
          && 10 == this.lineXY[i]["xW"]
          && posY <= ( this.lineXY[i]["yS"] + this.lineXY[i]["yH"] )

        ) 
      { 
          this.linePermission = false; 
          break;      
      }
      i++;
    } 

    // console.log(this.lineXY[0],"funkt"); 

    /* */
     

    if(
      posX<this.begrenzung["bR"]  
      && this.linePermission == true
      ){      
      // console.log(direction,"positionx + direction");
      return true
    }    
    
  }

  fetchLines(line:object){    
    this.lineXY = line;  
  }

}
