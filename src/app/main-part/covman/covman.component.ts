import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';

import { KeystrokeService } from '../../services/keystroke.service';
import { MovePermissionService } from '../../_services/move-permission.service';
// import { PointCountService } from '../../_services/point-count.service';

@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit, AfterViewInit {

  @ViewChild('covman', {static: true}) covmanView:ElementRef;  

  positionx:number = 40; 
  positiony:number = 40; 

  positionDirection = "ArrowRight";
 
  nextMovePermission:boolean=true;

  constructor(public _KeystrokeService:KeystrokeService,  
              public _MovePermissionService:MovePermissionService,
              // public _PointCountService:PointCountService,
              public _Router:Router,
              // public _Location:Location
               ) { }  

  ngOnInit() { 
    /*
    this._PointCountService.levelGet$.subscribe(next =>{
      this.positionx = 40; 
      this.positiony = 40; 
    })
    */

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
        this.positionx = this.covmanView.nativeElement.offsetLeft + 10;          
        break;
      case "ArrowLeft":
        this.positionx = this.covmanView.nativeElement.offsetLeft - 10;          
        break;
      case "ArrowUp":
        this.positiony = this.covmanView.nativeElement.offsetTop - 10;
        break;
      case "ArrowDown":
        this.positiony = this.covmanView.nativeElement.offsetTop + 10;
        break;
    }    

    // asking for movepermission       
    this.nextMovePermission = this._MovePermissionService.playMove(this.positionx, this.positiony);      
    
    if(!this.nextMovePermission) 
    {      
      this.positionx = this.covmanView.nativeElement.offsetLeft;
      this.positiony = this.covmanView.nativeElement.offsetTop;                    
    };

    // return to main for check enemy
    return {x:this.positionx, y:this.positiony}; 
  }
}
