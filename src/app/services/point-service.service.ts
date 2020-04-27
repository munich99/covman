import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointServiceService {

  positionX:number;
  positionY:number;
  pointXY:object[];

  private pointCountSource = new Subject<number>();
  pointCount$ = this.pointCountSource.asObservable();

  private CovEnemySourceX = new Subject<number>();
  CovEnemyX$ = this.CovEnemySourceX.asObservable();
  

  constructor() {  }

  catchPoint(posX:number, posY:number){
    this.positionX = posX;
    this.positionY = posY;

    let i:number =0;
    while(this.pointXY[i]) {
            
      if(this.positionX == this.pointXY[i]["pointX"] && this.positionY == this.pointXY[i]["pointY"])
      {
        console.log(
          this.positionY + " sylvia = liebe yy " + this.pointXY[i]["pointY"] + " " +
          this.positionX + " match xx " + this.pointXY[i]["pointX"]
          );     
          this.CountPoint(4);
          this.pointXY.splice(i, 1);
      }         
      i++;
 
      this.CovEnemy( this.RandomCovEnemy() );

    }
  }

  ForCountPoint(poiXY:object[]){
    this.pointXY = poiXY;  
  }
  CountPoint(point:number){
    this.pointCountSource.next(point);     
  }
  CovEnemy(CovEnemyx:number){
    this.CovEnemySourceX.next(CovEnemyx); 
  }

  RandomCovEnemy(){
    let min = Math.ceil(1);
    let max = Math.floor(400);
    let enemyX = Math.floor(Math.random() * (max - min +1)) + min;
    return enemyX
  }

}
