import { Component, OnInit } from '@angular/core';
import { PointServiceService } from '../../services/point-service.service';

@Component({
  selector: 'app-cov-enemy',
  templateUrl: './cov-enemy.component.html',
  styleUrls: ['./cov-enemy.component.css']
})
export class CovEnemyComponent implements OnInit {

  constructor(public _PointServiceService:PointServiceService  ) { }

  ngOnInit() {

    this._PointServiceService.CovEnemyX$
    .subscribe(xx => {
// console.log(xx, "xx");
    })
  }

  moveEnemy(){
    
  }

}
