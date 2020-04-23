import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points=[
    {pointX:50, pointY:50}
  ]

  constructor() { }

  ngOnInit() {
  }

}
