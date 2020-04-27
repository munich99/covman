import { Component, OnInit} from '@angular/core';
import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points=[
    {positionx:80, positiony:50},
    {positionx:200, positiony:120},
    {positionx:40, positiony:200},
  ]

  constructor(    
    public _PointCountService:PointCountService
    ) { }

  ngOnInit() {    
    this._PointCountService.pointsPosition(this.points)
  }

}
