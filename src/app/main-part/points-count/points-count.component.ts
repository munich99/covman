import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points-count',
  templateUrl: './points-count.component.html',
  styleUrls: ['./points-count.component.css']
})
export class PointsCountComponent implements OnInit {

  points:number=10;

  constructor(
    // public _PointServiceService:PointServiceService 
    ) { }

  ngOnInit() {  
    /* 
      this._PointServiceService.pointCount$
      .subscribe(message =>{
        this.points += message;
      })  
      */
  }

}
