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

  playMove(positionxy:object, covmancell:number){  

    let i:number = 0;
    while (this.lineXY[i]) { 
      if (
        positionxy['x'] > this.lineXY[i]["xS"] - covmancell
        && positionxy['x'] < (this.lineXY[i]["xS"] + this.lineXY[i]["xW"])
        && positionxy['y'] > this.lineXY[i]["yS"] - covmancell
        && positionxy['y'] <= this.lineXY[i]["yS"]        
        ) this.linePosition = false;        

      i++;    
    }
   

    if(
      positionxy['x'] < (this.PlaygroundWidth)
      && positionxy['x'] >= 0
      && positionxy['y'] < this.PlaygroundHeight
      && positionxy['y'] >=0    
      && this.linePosition
      ) {
        this.linePosition = true;
        return true
      }
    else {
      this.linePosition = true;
      return false};
  }

}
