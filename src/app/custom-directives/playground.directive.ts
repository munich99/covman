import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPlayground]'
})
export class PlaygroundDirective {

  // xRandLeft:number;
  // xRandRight:number;

  constructor(elementRef: ElementRef) {

    let wishSizeX = Math.floor( (window.innerWidth-10)/10 ) * 10;
    let wishDifX = window.innerWidth - wishSizeX;

    let wishSizeY = Math.floor( ((window.innerHeight/100) * 88) / 10 ) * 10;
    let wishDifY = ((window.innerHeight/100) * 88) - wishSizeY;
    // this.innerHeight = (window.innerHeight/100) * 88;

    let xRandLeft = this.randLO(wishDifX);    
    let xRandRight = this.randRU(wishDifX);
    let yRandTop = this.randLO(wishDifY);
    let yRandBottom = this.randLO(wishDifY);

    elementRef.nativeElement.style.position = 'absolute';
    elementRef.nativeElement.style.left = xRandLeft;
    elementRef.nativeElement.style.right = xRandRight;
    elementRef.nativeElement.style.top = yRandTop;
    elementRef.nativeElement.style.bottom = yRandBottom;

    elementRef.nativeElement.style.backgroundColor = '#1f1';

    console.log(xRandLeft,"window.innerHight");
    
  }

  randLO(wishDif:number){
    if (wishDif%2 == 0) {
      return wishDif/2 + 'px';
      // this.xRandRight= wishDifX/2;
    }
    else{
      return Math.floor(wishDif/2) + 'px';
      // this.xRandRight= Math.floor(wishDifX/2) +1;
    }
  }

  randRU(wishDif:number){
    if (wishDif%2 == 0) {
      return wishDif/2 + 'px';      
    }
    else{
      return ( Math.floor(wishDif/2) +1 ) + 'px';
    }
  }



}
