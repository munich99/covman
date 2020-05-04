import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointCountService {

  pointsPositionList:object[];
  
  private pointGetSource = new Subject<number>();
  pointGet$ = this.pointGetSource.asObservable();

  private levelGetSource = new Subject<number>();
  levelGet$ = this.levelGetSource.asObservable();

  constructor() { }

  pointsPosition(pointsXY:object[]){
    this.pointsPositionList = pointsXY;     
  }

  matchPoint(covmanposition:object){    
   
    let i=0;
    while(this.pointsPositionList[i]){      
      if( JSON.stringify(this.pointsPositionList[i]) === JSON.stringify(covmanposition) ) {   

        // counts points
        this.pointCounts(4);

        // remove point     
        this.pointsPositionList.splice(i, 1);

        if(Object.keys(this.pointsPositionList).length === 0) {
          this.levelGetSource.next(1);
          return true;
        }      
      }
      i++; 
    }
  }
  
  // tabelle
  pointCounts(pointcounts:number){
    this.pointGetSource.next(pointcounts);    
  }

}
