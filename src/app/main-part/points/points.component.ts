import { Component, OnInit} from '@angular/core';
import { PointServiceService } from '../../services/point-service.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points=[
    {pointX:80, pointY:50}
  ]

  constructor(public _PointServiceService:PointServiceService) { }

  ngOnInit() {
    this._PointServiceService.ForCountPoint(this.points)
  }

}
