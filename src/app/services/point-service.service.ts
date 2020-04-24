import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointServiceService {

  positionX:number;
  positionY:number;
  pointXY:object;
  private pointCountSource = new Subject<number>();
  pointCount$ = this.pointCountSource.asObservable();

  

  

  constructor() {  }

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
          );     
          this.CountPoint(4)
      }         
      i++;
    }
  }

  ForCountPoint(poiXY:object){
    this.pointXY = poiXY;  
  }
  CountPoint(point:number){
    this.pointCountSource.next(point);     
  }

}
