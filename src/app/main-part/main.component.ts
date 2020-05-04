import { Component, OnInit, AfterViewInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

import { CovmanComponent } from './covman/covman.component';
import { CovEnemyComponent } from './cov-enemy/cov-enemy.component';
import { LinesComponent } from './lines/lines.component';

import { PointCountService } from '../_services/point-count.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('covmanwalk', { read: CovmanComponent, static: true }) covmanview:CovmanComponent;
  @ViewChild('linewalk', { read: LinesComponent, static: true }) lineview:LinesComponent; 
  @ViewChildren(CovEnemyComponent) enemieswalk: QueryList<any>;

  breakLittle:boolean;
  stillLive:number = 3;  
  level:number = 1;
  pointCount:boolean;
  startCovman = null;
  enemies = [1,2];

  constructor(
    public _PointCountService:PointCountService,
    public _Router:Router ) { }

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

  ngOnInit() {
    this.lineview.randomLines();
    this.startCovman = interval(100).subscribe( () => { this.move() });
   }

   ngAfterViewInit(){    
   }

  loseLive(){    
    this.stillLive--;    
    this.startCovman.unsubscribe();   
    this.breakLittle = true;
    setTimeout( () => {        
        if( this.stillLive >= 1 ) {
          this.breakLittle = !this.breakLittle;
          this.covmanview.positionxy = {x:10, y:10};
          this.startCovman = interval(100).subscribe( () => { this.move(); });
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
    this.breakLittle = true;
    this.level++;
    this.enemies.push(this.enemies.length + 1);
    this.covmanview.positionxy = {x:10, y:10};
    setTimeout( () => {  
        this.breakLittle = !this.breakLittle;
        this.startCovman = interval(100).subscribe( () => { this.move() });
      },2500
    )
  }
}
