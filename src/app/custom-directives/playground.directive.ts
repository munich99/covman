import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPlayground]'
})
export class PlaygroundDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.position = 'absolute';
    elementRef.nativeElement.style.left = '10px';
    elementRef.nativeElement.style.right = '10px';
    elementRef.nativeElement.style.top = '10px';
    elementRef.nativeElement.style.bottom = '10px';

    elementRef.nativeElement.style.backgroundColor = '#1f1';

    console.log(window.innerWidth,"window.innerWidth")
    
  }

}
