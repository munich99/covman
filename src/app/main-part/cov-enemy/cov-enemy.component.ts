import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MovePermissionService } from '../../_services/move-permission.service';


@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {  

  @ViewChild('enemywalk', {static: true}) enemywalkView:ElementRef;

  // enemyies:object=[{name:1}];

  positionx:number = 40; 
  positiony:number = 20; 
  positionX = this.positionx + "px";
  positionY = this.positiony + "px";
  positionDirection:number = 1;
  nextMovePermission:boolean;

  constructor(public _MovePermissionService:MovePermissionService) { }

  ngOnInit() { }

  loseLive(x:number, y:number){  
    this.moveEnemy();   
    if (this.positionx == x && this.positiony == y) return false;
    else return true;
  }


  RandomCovEnemy(){
    let min = Math.ceil(1);
    let max = Math.floor(4);
    let enemyDirection = Math.floor(Math.random() * (max - min +1)) + min;
    return enemyDirection;
  }

  moveEnemy(){   
    
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
    this.positionX = this.positionx +  "px"; 
    this.positionY = this.positiony +  "px";
  }

}
