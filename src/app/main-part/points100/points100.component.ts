import { Component, OnInit, Input } from '@angular/core';

import { PointCountService } from '../../_services/point-count.service';
import { RandomService } from '../../_services/random.service';
import { MovePermissionService } from '../../_services/move-permission.service';

import { Pointsdetails } from '../../_interfaces/pointsdetails';

@Component({
  selector: 'app-points100',
  templateUrl: './points100.component.html',
  styleUrls: ['./points100.component.css']
})
export class Points100Component implements OnInit {

  @Input() covmanCell:number;
  
  pointsB:Pointsdetails[]=[];

  constructor(    
    public _RandomService:RandomService,
    public _PointCountService:PointCountService,
    public _MovePermissionService:MovePermissionService
    ) { }

  pointsMake(){    
    let i:number=1;
    while(i<=3){
      let pointNew = {
        // Dimensions {xS: 200, xW: 300, yS: 30, yH: 10}
        left:   (this._RandomService.randomEngineXY()["xS"] + 'px'),
        top:    (this._RandomService.randomEngineXY()["yS"] + 10 + 'px'),
        width:  (this.covmanCell + "px"),
        height: (this.covmanCell + "px"),
        count:100
      };
      this.pointsB.push(pointNew);
      i++;
    }
    this._PointCountService.pointsPosition(this.pointsB, 100);
  }

  ngOnInit() {    
   this.pointsMake(); 
  }

}
