import { Component, OnInit, AfterViewInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

import { Router } from '@angular/router';
import { interval } from 'rxjs';

import { CovmanComponent } from './covman/covman.component';
import { CovEnemyComponent } from './cov-enemy/cov-enemy.component';
import { LinesComponent } from './lines/lines.component';
import { PointsComponent } from './points/points.component';
import { Points100Component } from './points100/points100.component';

import { PointCountService } from '../_services/point-count.service';
import { MovePermissionService } from '../_services/move-permission.service';
import { RandomService} from '../_services/random.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({        
        opacity: 0.9,
        backgroundColor: '#69FA4B'
      })),
      
      state('closed', style({        
        opacity: 0,
        backgroundColor: 'green'
      })),

      
       transition('closed => open',[
        animate('0.5s')
      ]),
      transition('open => closed', [
        animate('0.5s')
      ]),
    ]),
  ]

})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('covmanwalk', { read: CovmanComponent, static: true }) covmanview:CovmanComponent;
  @ViewChild('linewalk', { read: LinesComponent, static: true }) lineview:LinesComponent; 
  @ViewChild('pointwalk', { read: PointsComponent, static: true }) pointview:PointsComponent; 
  @ViewChild('pointwalk100', { read: Points100Component, static: true }) pointview100:Points100Component;

  @ViewChildren(CovEnemyComponent) enemieswalk: QueryList<any>;

  breakLittle:boolean;
  stillLive:number = 3;  
  level:number = 1;
  pointCount:boolean;
  startCovman = null;
  enemies = [1,2];

  screenX:number;
  screenXcomplete:number;
  screenY:number;
  cellPlay:number;
  covmanCell:number;
  cellPlayBorder:number;  

  isOpen = false; // ani

  constructor(
    public _PointCountService:PointCountService,
    public _MovePermissionService:MovePermissionService,
    public _RandomService:RandomService,
    public _Router:Router ) 
    {     }

  move(){
    let moveCovmanPosition = this.covmanview.moveCovman();
    
    this.enemieswalk.forEach( e => {
      let enemyPositionAlt = e.positionxy;      
      if( JSON.stringify(enemyPositionAlt) == JSON.stringify(moveCovmanPosition) ) this.loseLive();
      let enemyPositionNeu:object = e.moveEnemy();      
      if( JSON.stringify(enemyPositionNeu) == JSON.stringify(moveCovmanPosition) ) this.loseLive();        
    }); 

    this.pointCount = this._PointCountService.matchPoint(moveCovmanPosition); 
    if(this.pointCount) this.nextLevel();  
  }

  setSizes(){
    this.screenXcomplete = window.innerWidth;
    let screenXplay = this.screenXcomplete/20;    
    this.cellPlay = Math.ceil( (screenXplay*15)/29 );    
    this.covmanCell = Math.floor(this.cellPlay/10) *10; 
    // this.cellPlayBorder = this.cellPlay - this.covmanCell;
    // if(this.cellPlayBorder<5) this.cellPlayBorder = 5;
    this.cellPlayBorder = 10;    
    this.screenX = this.covmanCell*29 + this.cellPlayBorder*28; 
    this.screenY = this.covmanCell*10 + this.cellPlayBorder*10;    
  }

  startCovmanLevel(){
    this.setSizes();
    this._MovePermissionService.playBorder(this.screenX, this.screenY);
    this._RandomService.playBorder(this.screenX, this.screenY);

    this.lineview.randomLines(this.cellPlayBorder, this.covmanCell );
    this.startCovman = interval(50).subscribe( () => { this.move() });
  }

  ngOnInit() {   
    this.startCovmanLevel();
   }

   ngAfterViewInit(){  
   }

  loseLive(){  

    this.stillLive--;    
    this.startCovman.unsubscribe();  
    this.isOpen = !this.isOpen;

    // this.startCovman = null; 

    this.breakLittle = true;

    setTimeout( () => {    
       
      this.covmanview.covManDetail.left = "0";
      this.covmanview.covManDetail.top = "0";
      this.covmanview.positionxy = {x:0, y:0};

        if( this.stillLive >= 1 ) {
          this.isOpen = !this.isOpen;
          this.breakLittle = !this.breakLittle;
          this.startCovman = interval(50).subscribe( () => { this.move(); });
        }
      },2500
    ); 
  }

  newGame(){
    this._Router.navigateByUrl("/", {skipLocationChange:true})
    .then( ()=>{       
      this._Router.navigate(['/game']);     
      // this._Router.navigate(['decodeURI(this._Location.path())']);
    });        
  }

  nextLevel(){
    this.startCovman.unsubscribe();
    this.startCovman = null;
    this.covmanview.covManDetail.left = "0";
    this.covmanview.covManDetail.top = "0";
    this.covmanview.positionxy = {x:0, y:0};

    this.isOpen = !this.isOpen;
    this.breakLittle = true;
    this.level++;
    this.enemies.push(this.enemies.length + 1);

    this.pointview.pointsMake();
    setTimeout( () => {  
        this.breakLittle = !this.breakLittle;  
        this.isOpen = !this.isOpen;      
        this.startCovmanLevel();
      },2500
    )
  }
}
