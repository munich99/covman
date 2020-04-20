import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { CovpositionService } from '../../services/covposition.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  @Input()
  boxSize:string;

  
  dimensions = [
    {xS:130, xW:10, yS:0, yH:110},
    {xS:50, xW:60, yS:130, yH:10}
  ];
  

  constructor(
    public _ElementRef:ElementRef,
    public _CovpositionService:CovpositionService
    ) { }

  ngOnInit() {
    console.log(this.boxSize,"box");
    this._CovpositionService.fetchLines(this.dimensions);
  }

  ngAfterViewInit(){
    let PlaySize = this._ElementRef.nativeElement.offsetHeight;
    console.log(PlaySize,"playsize")
  }


}
