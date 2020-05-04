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
  // @ViewChild('enemywalk', { read: CovEnemyComponent, static: true }) enemyview:CovEnemyComponent;
  // @ViewChild('enemywalk2', { read: CovEnemyComponent, static: true }) enemyview2:CovEnemyComponent;
  @ViewChild('linewalk', { read: LinesComponent, static: true }) lineview:LinesComponent; 
  @ViewChildren(CovEnemyComponent) hellos: QueryList<any>;

  breakLittle:boolean;
  stillLive:number = 3;  
  level:number = 1;
  pointCount:boolean;
  startCovman = null;
  liveCatch = null;
  liveCatch2 = null;  

  constructor(
    public _PointCountService:PointCountService,
    public _Router:Router ) { }

  move(){
    let moveCovmanPosition = this.covmanview.moveCovman();  
    
/*
    let enemyPositionAlt:object[] = [];
    enemyPositionAlt.push(this.enemyview.staticEnemy());
    enemyPositionAlt.push(this.enemyview2.staticEnemy());

    let enemyPositionNew:object[] = [];
    enemyPositionNew.push(this.enemyview.moveEnemy());
    enemyPositionNew.push(this.enemyview2.moveEnemy()); 

    let i:number =0;
    while(i<=1){
      if( 
        JSON.stringify(moveCovmanPosition) == JSON.stringify(enemyPositionNew[i]) ||
        JSON.stringify(moveCovmanPosition) == JSON.stringify(enemyPositionAlt[i])
      ) console.log("erwischt 2");

      i++;
    }


    */

    
    

   
    

    this.pointCount = this._PointCountService.matchPoint(moveCovmanPosition);
          
    // if(this.liveCatch || this.liveCatch2) this.loseLive();
    if(this.pointCount) this.nextLevel();  
  }

  ngOnInit() {
    this.lineview.randomLines();
    this.startCovman = interval(100).subscribe( () => { this.move() });
   }

   ngAfterViewInit(){
    this.hellos.forEach( e => console.log(e));
   }

  loseLive(){
    console.log("oh no!!!");
    this.stillLive--;    
    this.startCovman.unsubscribe();   
    this.breakLittle = true;
    setTimeout( () => {        
        if( this.stillLive >= 1 ) {
          this.breakLittle = !this.breakLittle;
          this.startCovman = interval(100).subscribe( () => { this.move() });
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
    setTimeout( () => {  
        this.breakLittle = !this.breakLittle;
        this.startCovman = interval(100).subscribe( () => { this.move() });
      },2500
    )

  }

}
