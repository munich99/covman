import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MovePermissionService } from '../../_services/move-permission.service';
import { PointCountService } from '../../_services/point-count.service';


@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {  

  @ViewChild('enemy', {static: true}) enemyView:ElementRef;

  // enemyies:object=[{name:1}];

  positionx:number = 300; 
  positiony:number = 40; 
  
  positionDirection:number = 1;
  nextMovePermission:boolean;

  constructor(
    public _MovePermissionService:MovePermissionService,
    public _PointCountService:PointCountService) { }

  ngOnInit() { }

  moveEnemy(){   
    this.positionx = this.enemyView.nativeElement.offsetLeft - 10;
    return this.positionx;

    //sending new position to point-count service
    // let covManEnemyPosition = {positionx:this.positionx, positiony: this.positiony};
    // this._PointCountService.enemyPosition(covManEnemyPosition);
    
  }
    
    /*
  // asking for direction
    switch (this.positionDirection) {
      case 1: // "ArrowRight"
        this.positionx = this.enemywalkView.nativeElement.offsetLeft + 10;          
        break;
      case 2: // "ArrowLeft"
        this.positionx = this.enemywalkView.nativeElement.offsetLeft - 10;          
        break;
      case 3: // "ArrowUp"
        this.positiony = this.enemywalkView.nativeElement.offsetTop - 10;
        break;
      case 4: // "ArrowDown"
        this.positiony = this.enemywalkView.nativeElement.offsetTop + 10;
        break;
    } 

    // asking for movepermission       
    this.nextMovePermission = this._MovePermissionService.playMove(this.positionx, this.positiony);      
    if(!this.nextMovePermission) 
    {  
      this.positionx = this.enemywalkView.nativeElement.offsetLeft;
      this.positiony = this.enemywalkView.nativeElement.offsetTop;  
      this.positionDirection = this.RandomCovEnemy();                  
    }   

    // setting new position


    //giving new position to point-count service
    let covManEnemyPosition = {positionx:this.positionx, positiony: this.positiony};
    this._PointCountService.enemyPosition(covManEnemyPosition);

  }

  RandomCovEnemy(){
    let min = Math.ceil(1);
    let max = Math.floor(4);
    let enemyDirection = Math.floor(Math.random() * (max - min +1)) + min;
    return enemyDirection;
  } */

}
