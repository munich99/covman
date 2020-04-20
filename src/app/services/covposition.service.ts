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
    let i = 0;
    this.linePermission = true;

       /* let i = 0;
     while (this.lineXY[i]) {
      console.log(this.lineXY[i],"funkt");  
      i++;
    } 
    console.log(this.lineXY[0],"funkt"); 
*/
    if(this.lineXY[0]["xS"] == posX){      
      this.linePermission = false;
    }
     

    if(posX<this.begrenzung["bR"] && this.linePermission == true){      
      // console.log(direction,"positionx + direction");
      return true
    }    
    
  }

  fetchLines(line:object){    
    this.lineXY = line;  
  }

}
