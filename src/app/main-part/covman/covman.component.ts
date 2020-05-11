import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';

import { KeystrokeService } from '../../services/keystroke.service';
import { MovePermissionService } from '../../_services/move-permission.service';

import { Covmandetails } from '../../_interfaces/covmandetails';


@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit, AfterViewInit {

  @Input() covmanCell:number;
  @ViewChild('covman', {static: true}) covmanView:ElementRef;  

  positionxy:object = {x:0, y:0};
  covManDetail:Covmandetails;

  positionDirection = "ArrowRight";
 
  nextMovePermission:boolean=true;

  constructor(public _KeystrokeService:KeystrokeService,  
              public _MovePermissionService:MovePermissionService,              
              // public _PointCountService:PointCountService,
              public _Router:Router,
              // public _Location:Location
               ) { }  

  ngOnInit() { 
    this.covManDetail = {
      left: this.positionxy['x'],
      top: this.positionxy['y'],
      width: (this.covmanCell + "px"),
      height: (this.covmanCell + "px")
    }
  }

  ngAfterViewInit() {     
    this._KeystrokeService.keyStroke$.subscribe(
      messageKey =>{        
        this.positionDirection = messageKey;
      });       
  }

  moveCovman(){     
    
    switch (this.positionDirection) {
      case "ArrowRight":
        this.positionxy['x'] = this.covmanView.nativeElement.offsetLeft + 10;          
        break;
      case "ArrowLeft":
        this.positionxy['x'] = this.covmanView.nativeElement.offsetLeft - 10;          
        break;
      case "ArrowUp":
        this.positionxy['y'] = this.covmanView.nativeElement.offsetTop - 10;
        break;
      case "ArrowDown":
        this.positionxy['y'] = this.covmanView.nativeElement.offsetTop + 10;
        break;
    }    

    // asking for movepermission       
    this.nextMovePermission = this._MovePermissionService.playMove(this.positionxy, this.covmanCell);  
         
    if(!this.nextMovePermission) 
    {      
      this.positionxy['x'] = this.covmanView.nativeElement.offsetLeft;
      this.positionxy['y'] = this.covmanView.nativeElement.offsetTop;                    
    };   

    // position
    this.covManDetail.left= this.positionxy['x'] + "px";
    this.covManDetail.top= this.positionxy['y'] + "px";

    // return to main for check enemy
    return this.positionxy; 


  }
}
