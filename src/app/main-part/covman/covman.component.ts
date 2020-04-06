import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-covman',
  templateUrl: './covman.component.html',
  styleUrls: ['./covman.component.css']
})
export class CovmanComponent implements OnInit {

  position:number = 40;  
  positionPx = this.position + "px";  

  constructor() { }

  ngOnInit() {   
    
    /* const numbers = interval(10);
    const takeFourNumbers = numbers;
    takeFourNumbers.subscribe(x => this.move(x));
    */

   interval(10).subscribe( () => this.move() );
    
  }

  move(){  
    if(this.position <= 200) {
      this.position+= 2;      
      this.positionPx = this.position + "px";
    }
   
  }
}
