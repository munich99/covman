import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

import { KeystrokeService } from '../../services/keystroke.service';
import { PointServiceService } from '../../services/point-service.service';
import { MovePermissionService } from '../../_services/move-permission.service';


@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit, AfterViewInit {

  @ViewChild('covman', {static: true}) covmanView:ElementRef;
  @ViewChild('playground', {static: true}) playgroundView:ElementRef;

  positionx:number = 40; 
  positiony:number = 40; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight"; 

  nextMovePermission:boolean;

  constructor(public _KeystrokeService:KeystrokeService,              
              public _PointServiceService:PointServiceService,
              public _MovePermissionService:MovePermissionService
               ) { }

  ngOnInit() { }

  ngAfterViewInit() { 
    interval(100).subscribe( () => this.move() );

    this._KeystrokeService.keyStroke$.subscribe(
      messageKey =>{
        console.log(messageKey, "pacman richtung");
        this.positionDirection = messageKey;
      });  
  }

  move(){   

      // asking for direction
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
      this.nextMove(this.positionx, this.positiony);  
      
      if(this.nextMovePermission) 
      {      
        this.positionX = this.positionx +  "px"; 
        this.positionY = this.positiony +  "px";                      
      }
      else {
          this.positionx = this.covmanView.nativeElement.offsetLeft;
          this.positionX = this.positionx+  "px"; 
          this.positiony = this.covmanView.nativeElement.offsetTop;
          this.positionY = this.positiony+  "px"; 
      }
  }  

  nextMove(positionx:number, positiony:number){     
    this.nextMovePermission = this._MovePermissionService.playMove(positionx, positiony);
  }

}
