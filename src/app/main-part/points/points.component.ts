import { Component, OnInit} from '@angular/core';
import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points=[
    {x:80, y:50},
    {x:200, y:120},
    {x:40, y:200},
  ]

  constructor(    
    public _PointCountService:PointCountService
    ) { }

  ngOnInit() {    
    this._PointCountService.pointsPosition(this.points)
  }

}
