import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { MovePermissionService } from '../../_services/move-permission.service';
import { RandomService } from '../../_services/random.service';
import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {

  @Input() bankName: string;
  
  dimensions;
  
  

  constructor(
    public _ElementRef:ElementRef,    
    public _MovePermissionService:MovePermissionService,
    public _RandomService:RandomService,
    public _PointCountService:PointCountService
    ) { }

  ngOnInit() {  
    let PlaySizeWidth = this._ElementRef.nativeElement.offsetWidth;
    let PlaySizeHeight = this._ElementRef.nativeElement.offsetHeight;
    
    this.dimensions = this._RandomService.randomEngine(); 
    this._MovePermissionService.playLines(this.dimensions);

    this._PointCountService.levelGet$.subscribe(next=>{
      
        this.dimensions = this._RandomService.randomEngine();
        this._MovePermissionService.playLines(this.dimensions);
     
      
    })
    
  }

  ngAfterViewInit(){
  }


}
