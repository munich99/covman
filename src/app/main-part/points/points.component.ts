import { Component, OnInit} from '@angular/core';
import { PointCountService } from '../../_services/point-count.service';
import { RandomService } from '../../_services/random.service';
import { MovePermissionService } from '../../_services/move-permission.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points:object[]=[];

  constructor(    
    public _RandomService:RandomService,
    public _PointCountService:PointCountService,
    public _MovePermissionService:MovePermissionService
    ) { }

  pointsMake(){
    let i:number=1;
    while(i<=10){
      let pointNew = {
        x:this._RandomService.randomEngineSolo("x"),
        y:this._RandomService.randomEngineSolo("y")
      };

      // ask for set point permission
      let nextSetPermission = this._MovePermissionService.playMove(pointNew, null);
      console.log(nextSetPermission, "nextSetPermission")

      if(nextSetPermission) {
        this.points.push(pointNew);
        i++;
      }
      
    }

  }

  ngOnInit() {    
    this.pointsMake();
    this._PointCountService.pointsPosition(this.points);

    // für den neustart
    this._PointCountService.levelGet$.subscribe( next => {
      this.pointsMake();
      this._PointCountService.pointsPosition(this.points);
    }) 
    
  }

}
