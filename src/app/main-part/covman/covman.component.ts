import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';

import { KeystrokeService } from '../../services/keystroke.service';
import { MovePermissionService } from '../../_services/move-permission.service';
import { PointCountService } from '../../_services/point-count.service';

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
  
  lives:number=3;
  levels:number=1;

  breakLittle:boolean=false;

  nextMovePermission:boolean;

  constructor(public _KeystrokeService:KeystrokeService,  
              public _MovePermissionService:MovePermissionService,
              public _PointCountService:PointCountService,
              public _Router:Router,
              // public _Location:Location
               ) { }


  moveCovman(){   
  this.positionx = this.covmanView.nativeElement.offsetLeft + 10; 
  return this.positionx;

  // sending postion for count points
  // let covManPosition = {positionx:this.positionx, positiony:this.positiony};  
  // this._PointCountService.covManPosition(covManPosition); 
  }

  ngOnInit() { 

  }

  ngAfterViewInit() { 
    /*
    
    
    this._KeystrokeService.keyStroke$.subscribe(
      messageKey =>{
        console.log(messageKey, "pacman richtung");
        this.positionDirection = messageKey;
      });  
      */
  }

  /*

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

      this.enemyview1.moveEnemy();

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
    // muss geändert werden in point counts ------------------------  
   // this.startAgain( this.enemyview1.loseLive(this.positionx, this.positiony) ); 
    // this.startAgain( this.enemyview2.loseLive(this.positionx, this.positiony) );  
    // ---------------------------------------
    
    //this.enemyview2.moveEnemy();

    // setting new position
    this.positionX = this.positionx +  "px"; 
    this.positionY = this.positiony +  "px";  
    
    

  } // end of Move()

  startAgain(liveYes:boolean){
    if (!liveYes) {
      this.positionx = 40; 
      this.positiony = 40;
      this.positionDirection = "ArrowRight";
      this.lives--;

      if(this.lives<=0) {    
        this.breakLittle = false;    
        this.startCovman.unsubscribe();        
      }
      else{
        // for little break on Screen
        this.breakLittle = true; 
        this.startCovman.unsubscribe();
        setTimeout(
          () => {
            this.startCovman = interval(100).subscribe( () => this.move() );
            this.breakLittle = false;
          },2500
        );
      };      
    }
    
  }


  newGame(){
    // skipLocationChange?: boolean	-- When true, navigates without pushing a new state into history.
    this._Router.navigateByUrl("/", {skipLocationChange:true})
    .then( ()=>{       
      this._Router.navigate(['/game']);     
      // this._Router.navigate(['decodeURI(this._Location.path())']);
    })
  }
  */

}
