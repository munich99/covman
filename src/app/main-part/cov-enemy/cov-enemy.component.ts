import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {

  // @ViewChild('enemywalk', {static: true}) enemyView:ElementRef;

  positionx:number = 40; 
  positiony:number = 20; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight";

  constructor() { }

  ngOnInit() { }
/*
    this._PointServiceService.CovEnemyX$
    .subscribe(xx => {
      */
 

    sayHello(x:number, y:number){
      console.log(x + "hallo from enemy" + y);
      if (this.positionx == x && this.positiony == y) alert("erwischt");
    }





}
