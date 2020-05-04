import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

import { CovmanComponent } from './covman/covman.component';
import { CovEnemyComponent } from './cov-enemy/cov-enemy.component';

import { PointCountService } from '../_services/point-count.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('covmanwalk', { read: CovmanComponent, static: true }) covmanview:CovmanComponent;
  @ViewChild('enemywalk', { read: CovEnemyComponent, static: true }) enemyview:CovEnemyComponent;

  breakLittle:boolean;
  stillLive:number = 3;  
  level:number = 1;
  pointCount:boolean;

  constructor(
    public _PointCountService:PointCountService,
    public _Router:Router ) { }
  
  startCovman = interval(100).subscribe( () => { this.move() }); 

  move(){
    let moveCovmanPosition = this.covmanview.moveCovman();
    let liveCatch = this.enemyview.moveEnemy(moveCovmanPosition) // nessesery sending covmanposition to enemy for checking match
    this.pointCount = this._PointCountService.matchPoint(moveCovmanPosition);
          
    if(liveCatch) this.loseLive();

    if(this.pointCount) this.nextLevel();  
  }

  ngOnInit() { }

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
