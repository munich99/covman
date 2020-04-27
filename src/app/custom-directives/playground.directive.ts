import { Directive, ElementRef } from '@angular/core';

import { MovePermissionService } from '../_services/move-permission.service';



@Directive({
  selector: '[appPlayground]'
})
export class PlaygroundDirective {

  // xRandLeft:number;
  // xRandRight:number;

  constructor(
    elementRef: ElementRef,
    public _MovePermissionService:MovePermissionService
    ) {

    
      let PlaygroundWidth = 400;
      let PlaygroundHeight = 420;
      
      this._MovePermissionService.playBorder(PlaygroundWidth, PlaygroundHeight);

    








    let wishSizeX = Math.floor( (window.innerWidth-10)/10 ) * 10;
    let wishDifX = window.innerWidth - wishSizeX;

    let wishSizeY = Math.floor( ((window.innerHeight/100) * 88) / 10 ) * 10;
    let wishDifY = ((window.innerHeight/100) * 88) - wishSizeY;
    // this.innerHeight = (window.innerHeight/100) * 88;

    let xRandLeft = this.randLO(wishDifX);    
    let xRandRight = this.randRU(wishDifX);
    let yRandTop = this.randLO(wishDifY);
    let yRandBottom = this.randLO(wishDifY);

    elementRef.nativeElement.style.position = 'relative';
    elementRef.nativeElement.style.float = 'left';
    elementRef.nativeElement.style.left = '10px' // xRandLeft;
    //elementRef.nativeElement.style.right =  '0' // xRandRight;
    elementRef.nativeElement.style.marginRight =  '10px' // xRandRight;
    elementRef.nativeElement.style.width = PlaygroundWidth + "px";
    
    elementRef.nativeElement.style.top = '10px' // yRandTop;
    elementRef.nativeElement.style.height = PlaygroundHeight + 'px';
    // elementRef.nativeElement.style.bottom = yRandBottom;

    elementRef.nativeElement.style.backgroundColor = '#1f1';

    // console.log(xRandLeft,"window.innerHight");
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
