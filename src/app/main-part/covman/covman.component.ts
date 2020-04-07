import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit {

  position:number = 40;  
  positionPx = this.position + "px";
  
  innerWidth:number;

  constructor() { }

  ngOnInit() {   
    
    /* const numbers = interval(10);
    const takeFourNumbers = numbers;
    takeFourNumbers.subscribe(x => this.move(x));
    */

   this.innerWidth = window.innerWidth;
   console.log(this.innerWidth," this.innerWidth = window.innerWidth;")

   // interval(10).subscribe( () => this.move() );
    
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
