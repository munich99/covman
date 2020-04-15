import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  @Input()
  boxSize:string;
  

  constructor(public _ElementRef:ElementRef) { }

  ngOnInit() {
    console.log(this.boxSize,"box")
  }

  ngAfterViewInit(){
    let PlaySize = this._ElementRef.nativeElement.offsetHeight;
    console.log(PlaySize,"playsize")
  }


}
