import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MovePermissionService } from '../../_services/move-permission.service';
import { PointCountService } from '../../_services/point-count.service';
import { RandomService } from '../../_services/random.service';


@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {  

  @ViewChild('enemy1', {static: true}) enemyView:ElementRef;  

  // enemyies:object=[{name:1}];

  
  positionxy:object;
  
  positionDirection:number;
  nextMovePermission:boolean= true;

  constructor(
    public _MovePermissionService:MovePermissionService,
    public _PointCountService:PointCountService,
    public _RandomService:RandomService
    ) { }

  ngOnInit() {
    this.positionxy = {
        x:this._RandomService.randomEngineSolo("x"),
        y:this._RandomService.randomEngineSolo("y")
      };

    this.RandomCovEnemyDirection()
   }

  staticEnemy(){
    return this.positionxy;
  }

  moveEnemy(){ 
    switch (this.positionDirection) {
      case 1: // "ArrowRight"
        this.positionxy['x'] = this.enemyView.nativeElement.offsetLeft + 10;          
        break;
      case 2: // "ArrowLeft"
        this.positionxy['x'] = this.enemyView.nativeElement.offsetLeft - 10;          
        break;
      case 3: // "ArrowUp"
      this.positionxy['y'] = this.enemyView.nativeElement.offsetTop - 10;
        break;
      case 4: // "ArrowDown"
      this.positionxy['y'] = this.enemyView.nativeElement.offsetTop + 10;
        break;
    } 
    
    // asking for movepermission    
    this.nextMovePermission = this._MovePermissionService.playMove(this.positionxy, null);      
    if(!this.nextMovePermission) 
    {      
      this.positionxy['x'] = this.enemyView.nativeElement.offsetLeft;
      this.positionxy['y'] = this.enemyView.nativeElement.offsetTop; 
      this.RandomCovEnemyDirection();        
    }    

    // this.positionxy
    return this.positionxy;  // return to main
  }    

  RandomCovEnemyDirection(){
    let min = Math.ceil(1);
    let max = Math.floor(4);
    this.positionDirection = Math.floor(Math.random() * (max - min +1)) + min;    
  } 

}
