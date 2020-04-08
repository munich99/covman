import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { KeystrokeService } from '../../services/keystroke.service'

@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit {

  positionx:number = 40; 
  positiony:number = 40; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight";

  covMan:any;
  playGround:any;
  
  innerWidth:number;
  innerHeight:number;

  constructor(public _KeystrokeService:KeystrokeService) { }

  ngOnInit() { 
    this.playsize();
    // interval(10).subscribe( () => this.move() );

    this._KeystrokeService.keyStroke$.subscribe(
      messageKey =>{
        console.log(messageKey, "pacman richtung");
        this.positionDirection = messageKey;
      });    
  }

  move(){
      switch (this.positionDirection) {
        case "ArrowRight":
          this.positionx+= 2;          
          break;
        case "ArrowLeft":
          this.positionx-= 2;          
          break;
        case "ArrowUp":
          this.positiony-= 2;          
          break;
        case "ArrowDown":
          this.positiony+= 2;          
          break;
      }
      if(this.positionx <= (this.innerWidth-20) && this.positionx >= 10)  {
        this.positionX = this.positionx + "px";
      }   
     if(this.positiony <= (this.innerHeight-20) && this.positiony >= 10)  {
        this.positionY = this.positiony + "px";
      } 
  }

  playsize(){

    this.innerWidth = window.innerWidth;
    this.innerHeight = (window.innerHeight/100) * 88;  
    /*
    this.playGround = {
      left:'10px',
      right:'10px',
      bottom:'10px',
      top:'10px',
      backgroundColor:'green'    
    }
    */

  }



}
