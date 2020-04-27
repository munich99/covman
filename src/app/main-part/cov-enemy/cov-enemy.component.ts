import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {  

  positionx:number = 40; 
  positiony:number = 20; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight";

  constructor() { }

  ngOnInit() { }

  sayHello(x:number, y:number){      
    if (this.positionx == x && this.positiony == y) return false;
    else return true;
  }





}
