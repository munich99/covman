import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PointServiceService } from '../../services/point-service.service';

@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {

  @ViewChild('enemy', {static: true}) enemyView:ElementRef;

  positionx:number = 40; 
  positiony:number = 20; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection = "ArrowRight";

  constructor(public _PointServiceService:PointServiceService  ) { }

  ngOnInit() {

    this._PointServiceService.CovEnemyX$
    .subscribe(xx => {
    // console.log(xx, "xx");
      // this.moveEnemy()
    })
  }

  moveEnemy(){
    switch (this.positionDirection) {
      case "ArrowRight":
        this.positionx = this.enemyView.nativeElement.offsetLeft + 10; 
        // this.movePermissionHorizotal = true;
        break;
      case "ArrowLeft":
        this.positionx = this.enemyView.nativeElement.offsetLeft - 10; 
        // this.movePermissionHorizotal = true;        
        break;
      case "ArrowUp":
        this.positiony = this.enemyView.nativeElement.offsetTop - 10; 
        // this.movePermissionHorizotal = false;         
        break;
      case "ArrowDown":
        this.positiony = this.enemyView.nativeElement.offsetTop + 10; 
        // this.movePermissionHorizotal = false;                   
        break;
    } 

    this.positionX = this.positionx+  "px";
    this.positionY = this.positiony+  "px";

  }

}
