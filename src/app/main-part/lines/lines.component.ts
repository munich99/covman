import { Component, OnInit, ElementRef } from '@angular/core';

import { MovePermissionService } from '../../_services/move-permission.service';
import { RandomService } from '../../_services/random.service';
import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  
  
  dimensions=null;

  constructor(
    public _ElementRef:ElementRef,    
    public _MovePermissionService:MovePermissionService,
    public _RandomService:RandomService,
    public _PointCountService:PointCountService
    ) { }

  randomLines(cellplayborder:number, covmancell:number){
    this.dimensions = this._RandomService.randomEngine(cellplayborder, covmancell); 
    this._MovePermissionService.playLines(this.dimensions);
  }

  ngOnInit() {  
    // new random after nextlevel loselive
    this._PointCountService.levelGet$.subscribe(next=>{      
        this.dimensions = this._RandomService.randomEngine(10,30);
        this._MovePermissionService.playLines(this.dimensions);
    })
    
  }

  ngAfterViewInit(){
  }


}
