import { Component, OnInit, Input } from '@angular/core';
import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  points:number=10;
  @Input() liveToDie:number;
  @Input() Level:number;

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
