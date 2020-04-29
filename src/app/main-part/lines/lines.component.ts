import { Component, OnInit, ElementRef } from '@angular/core';

import { MovePermissionService } from '../../_services/move-permission.service';
import { RandomService} from '../../_services/random.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  
  dimensions;
  

  constructor(
    public _ElementRef:ElementRef,    
    public _MovePermissionService:MovePermissionService,
    public _RandomService:RandomService
    ) { }

  ngOnInit() {  
    let PlaySizeWidth = this._ElementRef.nativeElement.offsetWidth;
    let PlaySizeHeight = this._ElementRef.nativeElement.offsetHeight;
    
    this.dimensions = this._RandomService.randomEngine(); 
    this._MovePermissionService.playLines(this.dimensions);
  }

  ngAfterViewInit(){
  }


}
