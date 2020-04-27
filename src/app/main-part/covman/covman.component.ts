import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

import { KeystrokeService } from '../../services/keystroke.service';
import { MovePermissionService } from '../../_services/move-permission.service';
import { PointCountService } from '../../_services/point-count.service';

import { CovEnemyComponent } from '../cov-enemy/cov-enemy.component';




@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit, AfterViewInit {

  @ViewChild('covman', {static: true}) covmanView:ElementRef;
  @ViewChild('playground', {static: true}) playgroundView:ElementRef;
  @ViewChild(CovEnemyComponent, {static: true}) enemyview:CovEnemyComponent;

  positionx:number = 40; 
  positiony:number = 40; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight";
  
  lives:number = 3;

  nextMovePermission:boolean;

  constructor(public _KeystrokeService:KeystrokeService,  
              public _MovePermissionService:MovePermissionService,
              public _PointCountService:PointCountService
               ) { }

  ngOnInit() { 

  }

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
      this.nextMovePermission = this._MovePermissionService.playMove(this.positionx, this.positiony);      
      if(!this.nextMovePermission) 
      {      
        this.positionx = this.covmanView.nativeElement.offsetLeft;
        this.positiony = this.covmanView.nativeElement.offsetTop;                    
      }

    // sending postion for count points
    let covManPosition = {positionx:this.positionx, positiony: this.positiony};  
    this._PointCountService.covManPosition(covManPosition);

    // asking for enemy and still to live
    let liveYes:boolean = this.enemyview.sayHello(this.positionx, this.positiony); 
    if (!liveYes)  {
      this.positionx = 40; 
      this.positiony = 40;
      this.positionDirection = "ArrowRight";
      this.lives--;
    }

    // setting new position
    this.positionX = this.positionx +  "px"; 
    this.positionY = this.positiony +  "px";  

  }  

}
