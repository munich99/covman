import { Directive, ElementRef } from '@angular/core';




@Directive({
  selector: '[appPlayground]'
})
export class PlaygroundDirective {

  // xRandLeft:number;
  // xRandRight:number;

  constructor(
    elementRef: ElementRef 
    ) {
    elementRef.nativeElement.style.position = 'relative';
    elementRef.nativeElement.style.float = 'left';
    elementRef.nativeElement.style.left = '10px' // xRandLeft;
    //elementRef.nativeElement.style.right =  '0' // xRandRight;
    elementRef.nativeElement.style.marginRight =  '10px' // xRandRight;    
    elementRef.nativeElement.style.top = '10px' // yRandTop;
    elementRef.nativeElement.style.backgroundColor = '#1f1';
  }

  

}
