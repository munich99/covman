import { Component, HostBinding, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { PointCountService } from '../../_services/point-count.service';


@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      
      state('closed', style({
        
        opacity: 0,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class PointsTableComponent implements OnInit {

  isOpen = false;

  points:number=10;
  newPointSolo;
  @Input() liveToDie:number;
  @Input() Level:number;

  constructor(
    public _PointCountService:PointCountService 
    ) { }

  ngOnInit() {  
    this._PointCountService.pointGet$
    .subscribe(newPoint =>{
      this.points += newPoint;
      this.newPointSolo = newPoint;
      
      this.isOpen = !this.isOpen;
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 1000);

    })
  }

  witdhTable(width:number){
    console.log(width, "witdhTable");    
  }

}
