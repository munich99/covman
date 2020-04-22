import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

import { KeystrokeService } from '../../services/keystroke.service';
import { CovpositionService } from '../../services/covposition.service';
import { PlaygroundService } from '../../services/playground.service';

@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit, AfterViewInit {

  @ViewChild('covman', {static: true}) covmanView:ElementRef;

  positionx:number = 40; 
  positiony:number = 40; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight";  
  
  innerWidth:number;
  innerHeight:number;  

  movePermission:boolean=true;
  movePermissionHorizotal:boolean=true;

  constructor(public _KeystrokeService:KeystrokeService,
              public _CovpositionService:CovpositionService,
              public _PlaygroundService:PlaygroundService
               ) { }

  ngOnInit() {  
    this._PlaygroundService.makeSize();
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
      switch (this.positionDirection) {
        case "ArrowRight":
          this.positionx = this.covmanView.nativeElement.offsetLeft + 10; 
          this.movePermissionHorizotal = true;
          break;
        case "ArrowLeft":
          this.positionx = this.covmanView.nativeElement.offsetLeft - 10; 
          this.movePermissionHorizotal = true;        
          break;
        case "ArrowUp":
          this.positiony = this.covmanView.nativeElement.offsetTop - 10; 
          this.movePermissionHorizotal = false;         
          break;
        case "ArrowDown":
          this.positiony = this.covmanView.nativeElement.offsetTop + 10; 
          this.movePermissionHorizotal = false;                   
          break;
      }       

      this.movePermission = this._CovpositionService.givePositon(       
                              this.positionx,
                              this.positiony
                            );             
      
      if(this.movePermission && this.movePermissionHorizotal ) 
      {      
        this.positionX = this.positionx+  "px";                
      }
      else {
          this.positionx = this.covmanView.nativeElement.offsetLeft;
          this.positionX = this.positionx+  "px"; 
      }

      if(this.movePermission && !this.movePermissionHorizotal ) 
      {      
        this.positionY = this.positiony+  "px";
      }
      else {
          this.positiony = this.covmanView.nativeElement.offsetTop;
          this.positionY = this.positiony+  "px"; 
      }     

  }  

}
