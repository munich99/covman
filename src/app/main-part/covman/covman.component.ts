import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { KeystrokeService } from '../../services/keystroke.service';
import { CovpositionService } from '../../services/covposition.service';

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

  covMan:any;
  playGround:any;
  
  innerWidth:number;
  innerHeight:number;  

  movePermission:boolean=true;

  constructor(public _KeystrokeService:KeystrokeService, public _CovpositionService:CovpositionService ) { }

  ngOnInit() {     
  }

  ngAfterViewInit() { 
    
    this.playsize();
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

      this.movePermission = this._CovpositionService.givePositon(       
        this.positionx,
        this.positiony        
        );  
      console.log(this.movePermission,"zurück vom service");      
      
      if(this.movePermission == true)  {        
        this.positionX = this.positionx+  "px";
      }   

     if(this.positiony <= (this.innerHeight-20) && this.positiony >= 10)  {
        this.positionY = this.positiony + "px"; 
      } 

  }  

  playsize(){
    this.innerWidth = window.innerWidth;
    this.innerHeight = (window.innerHeight/100) * 88; 
  }

}
