import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

import { CovmanComponent } from './covman/covman.component';
import { CovEnemyComponent } from './cov-enemy/cov-enemy.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('covmanwalk', { read: CovmanComponent, static: true }) covmanview:CovmanComponent;
  @ViewChild('enemywalk', { read: CovEnemyComponent, static: true }) enemyview:CovEnemyComponent;

  constructor() { }
  
  public startCovman = interval(1000).subscribe( () => {

    this.covmanview.moveCovman();
    this.enemyview.moveEnemy();
    
  } );
 

  ngOnInit() {
  }



}
