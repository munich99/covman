import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPlayground]'
})
export class PlaygroundDirective {
  constructor(
    elementRef: ElementRef 
    ) {
    elementRef.nativeElement.style.position = 'relative';
    elementRef.nativeElement.style.float = 'left';
    elementRef.nativeElement.style.backgroundColor = '#1f1';
  }
}
