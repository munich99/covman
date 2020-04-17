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
    {xS:130, xE:200, yS:100, yE:110},
    {xS:50, xE:60, yS:130, yE:180}
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
