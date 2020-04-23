import { Component, OnInit, ElementRef } from '@angular/core';
import { CovpositionService } from '../../services/covposition.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  
  dimensions = [
    {xS:130, xW:10, yS:0, yH:110},
    {xS:70, xW:90, yS:130, yH:10}
  ];
  

  constructor(
    public _ElementRef:ElementRef,
    public _CovpositionService:CovpositionService
    ) { }

  ngOnInit() {  
    let PlaySizeWidth = this._ElementRef.nativeElement.offsetWidth;
    let PlaySizeHeight = this._ElementRef.nativeElement.offsetHeight;
    console.log(PlaySizeHeight + " " + PlaySizeWidth ," playsize from lines");
    
    // Gives Postition of llines to Service  
    this._CovpositionService.fetchLines(this.dimensions);
  }

  ngAfterViewInit(){
  }


}
