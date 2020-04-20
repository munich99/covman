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
    
  

  constructor() { }

  givePositon(posX:number, posY:number){
    
    if(posX<this.begrenzung["bR"]){
      console.log(posX,"positionx");
      // console.log(direction,"positionx + direction");
      return true
    }    
    
  }

  fetchLines(line:object){
    let i = 0;
    
    while (line[i]) {
      console.log(line[i],"funkt");  
      i++;
    }

  }

  

}
