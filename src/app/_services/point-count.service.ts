import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointCountService {

  pointsPositionList:object[];
  
  private pointGetSource = new Subject<number>();
  pointGet$ = this.pointGetSource.asObservable();


  constructor() { }

  pointsPosition(pointsXY:object[]){
    this.pointsPositionList = pointsXY;     
  }

  covManPosition(covmanPosition:object){ 
    console.log(covmanPosition);
    //this.matchPoint(covmanPosition); 
    //this.matchEnemy(covmanPosition);  
  }

  matchPoint(covmanposition:object){    
   
    let i=0;
    while(this.pointsPositionList[i]){      
      if( JSON.stringify(this.pointsPositionList[i]) === JSON.stringify(covmanposition) ) {   
        // remove point     
        this.pointsPositionList.splice(i, 1); 
        // counts points
        this.pointCounts(4);
      }
      i++;
     // if(Object.keys(this.pointsPositionList).length === 0){
     //   console.log("next round")
     // }
    } 
  }
  
  // tabelle
  pointCounts(pointcounts:number){
    this.pointGetSource.next(pointcounts);    
  }
}
