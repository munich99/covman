import { Component, OnInit, Input} from '@angular/core';
import { PointCountService } from '../../_services/point-count.service';
import { RandomService } from '../../_services/random.service';
import { MovePermissionService } from '../../_services/move-permission.service';

import { Covmandetails } from '../../_interfaces/covmandetails';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  @Input() covmanCell:number;
  
  pointsA:Covmandetails[]=[];

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
        height: (this.covmanCell + "px")
      };
      this.pointsA.push(pointNew);
      i++;
    }
    this._PointCountService.pointsPosition(this.pointsA);
  }

  ngOnInit() {    
   this.pointsMake(); 
  }

}
