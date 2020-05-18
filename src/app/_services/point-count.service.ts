import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Pointsdetails } from '../_interfaces/pointsdetails';

@Injectable({
  providedIn: 'root'
})
export class PointCountService {

  pointsPositionList:Pointsdetails[];
  pointsPositionList100:Pointsdetails[];
  
  private pointGetSource = new Subject<number>();
  pointGet$ = this.pointGetSource.asObservable();

  private levelGetSource = new Subject<number>();
  levelGet$ = this.levelGetSource.asObservable();

  constructor() { }

  pointsPosition(pointsXY:Pointsdetails[], pointscore:number){
    //this.pointsPositionList = pointsXY;  
   if(pointscore == 4)
    this.pointsPositionList = pointsXY;
   if(pointscore == 100)
    this.pointsPositionList100 = pointsXY;
  }

  matchPoint(covmanposition:object){ 
    let i=0, b=0, cutout, cutoutindex;
    let pointsall = [...this.pointsPositionList, ...this.pointsPositionList100];

    while(pointsall[b]){    
        if(
          pointsall[b].left == (covmanposition["x"] + "px") &&
          pointsall[b].top == (covmanposition["y"] + "px")
        ) { 

          if(pointsall[b].count == 4) {
            cutout = this.pointsPositionList;
            cutoutindex = b;
          }

          if(pointsall[b].count == 100) { 
            cutout = this.pointsPositionList100;
            cutoutindex = b - this.pointsPositionList.length;
            console.log(cutoutindex,"cououtindex");
            
          }

          this.pointCounts(pointsall[b].count);
          cutout.splice(cutoutindex, 1);
        } 

        if(
          Object.keys(this.pointsPositionList).length === 0
          && Object.keys(this.pointsPositionList100).length === 0
          ) {
          this.levelGetSource.next(1);
          return true; 
        }
        b++;
    }

  }
  
  // tabelle
  pointCounts(pointcounts:number){
    this.pointGetSource.next(pointcounts);    
  }

}
