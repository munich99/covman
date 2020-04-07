import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { KeystrokeService } from '../../services/keystroke.service'

@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit {

  position:number = 40;  
  positionPx = this.position + "px";
  
  innerWidth:number;

  constructor(public _KeystrokeService:KeystrokeService) { }

  ngOnInit() {  

   this.innerWidth = window.innerWidth;   

   // interval(10).subscribe( () => this.move() );

   this._KeystrokeService.keyStroke$.subscribe(
     messageKey =>{alert(messageKey)
    });
    
  }

  move(){  
    if(this.position <= (this.innerWidth-20)) {
      this.position+= 2;      
      this.positionPx = this.position + "px";
    } else {
      console.log("erreicht")
    }
   
  }
}
