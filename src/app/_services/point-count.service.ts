import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointCountService {

  pointsPositionList:object[];

  constructor() { }

  pointsPosition(pointsXY:object[]){
    this.pointsPositionList = pointsXY;
    // console.log(pointsXY, "points");  
  }

  covManPosition(covmanPosition:object){    
    this.pointsMatch(covmanPosition); 
  }

  pointsMatch(covmanposition:object){
    let i=0;
    while(this.pointsPositionList[i]){      
      if( JSON.stringify(this.pointsPositionList[i]) === JSON.stringify(covmanposition) ) {
        console.log("match!");
        this.pointsPositionList.splice(i, 1);        
      }
      i++;
    }
  }

}
