import { Component, OnInit } from '@angular/core';
import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  points:number=10;

  constructor(
    public _PointCountService:PointCountService 
    ) { }

  ngOnInit() {  
    this._PointCountService.pointGet$
    .subscribe(newPoint =>{
      this.points += newPoint;
    })
  }

}
