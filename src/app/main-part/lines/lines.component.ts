import { Component, OnInit, ElementRef } from '@angular/core';

import { MovePermissionService } from '../../_services/move-permission.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  
  dimensions = [
    {xS:130, xW:10, yS:0, yH:110},
    {xS:200, xW:90, yS:130, yH:10},
    {xS:40, xW:360, yS:200, yH:10}
  ];
  

  constructor(
    public _ElementRef:ElementRef,    
    public _MovePermissionService:MovePermissionService
    ) { }

  ngOnInit() {  
    let PlaySizeWidth = this._ElementRef.nativeElement.offsetWidth;
    let PlaySizeHeight = this._ElementRef.nativeElement.offsetHeight;

    this._MovePermissionService.playLines(this.dimensions)

     
  }

  ngAfterViewInit(){
  }


}
