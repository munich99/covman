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
    {x:190, y:50}
  ]

  constructor(    
    public _PointCountService:PointCountService
    ) { }

  ngOnInit() {    
    this._PointCountService.pointsPosition(this.points);

    // für den neustart
    this._PointCountService.levelGet$.subscribe( next => {
      this.points=[
        {x:80, y:50},
        {x:190, y:50}
      ];
      this._PointCountService.pointsPosition(this.points);
    }) 

    
  }

}
