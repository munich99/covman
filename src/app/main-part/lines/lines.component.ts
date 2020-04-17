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
    {x:130}
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
