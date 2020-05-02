import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovePermissionService {

  PlaygroundWidth:number;
  PlaygroundHeight:number;

  lineXY:object;
  linePosition:boolean=true;

  constructor() { }

  playBorder(Playgroundwidth:number, Playgroundheight:number){    
    this.PlaygroundWidth = Playgroundwidth;
    this.PlaygroundHeight = Playgroundheight;
  }

  playLines(dimensions:object){  
    this.lineXY = dimensions; 
  }

  playMove(positionx:number, positiony:number){  
/*
    let i:number = 0;
    while (this.lineXY[i]) { 
      if (
        positionx >= this.lineXY[i]["xS"]
        && positionx < (this.lineXY[i]["xS"] + this.lineXY[i]["xW"])
        && positiony >= this.lineXY[i]["yS"]
        && positiony < (this.lineXY[i]["yS"] + this.lineXY[i]["yH"])
        ) 
          this.linePosition = false;  

      i++;    
    }
    */

    if(
      positionx < (this.PlaygroundWidth -10)
      && positionx > 0
      && positiony < this.PlaygroundHeight
      && positiony >=0    
      //&& this.linePosition
      ) {
        //this.linePosition = true;
        return true
      }
    else {
      // this.linePosition = true;
      return false};
  }

}
