import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointServiceService {

  positionX:number;
  positionY:number;
  pointXY:object;

  constructor() { }

  catchPoint(posX:number, posY:number){
    this.positionX = posX;
    this.positionY = posY;

    let i:number =0;
    while(this.pointXY[i]) {
      if(this.positionX == this.pointXY[i]["pointX"] && this.positionY == this.pointXY[i]["pointY"])
      {
        console.log(
          this.positionY + " match yy " + this.pointXY[i]["pointY"] + " " +
          this.positionX + " match xx " + this.pointXY[i]["pointX"]
          )
      }         
      i++;
    }
  }

  countPoint(poiXY:object){
    this.pointXY = poiXY;    

  }

}
