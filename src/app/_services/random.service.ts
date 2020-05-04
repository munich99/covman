import { Injectable } from '@angular/core';
import { Lines } from '../_interfaces/lines';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  PlaygroundWidth:number;
  PlaygroundHeight:number;
  

  constructor() { }

  playBorder(Playgroundwidth:number, Playgroundheight:number){    
    this.PlaygroundWidth = Playgroundwidth;
    this.PlaygroundHeight = Playgroundheight;
  }

  randomEngine(){ 
   
    let preDimensions;
    let Dimensions:Lines[]=[
      {xS:200, xW:10, yS:0, yH:100},
      {xS:50, xW:10, yS:320, yH:100}
    ];     
    let i:number= 0; 
    while(i <= 4){
      preDimensions = this.randomEngineXY( (this.PlaygroundWidth/10), (this.PlaygroundHeight/10) );
      Dimensions.push(preDimensions);
      i++;
    }
   
    preDimensions = this.randomEngineXY( (this.PlaygroundWidth/10), (this.PlaygroundHeight/10) );
    // console.log(Dimensions,"zufi");    
    return Dimensions;
  }

  randomEngineXY(stopx:number, stopy:number){
    let min = Math.ceil(0);
    let max = Math.floor( (stopx-1) );
    let randomValueStart = (Math.floor(Math.random() * (max - min +1)) + min);

    min = Math.ceil(1);
    max = Math.floor( (stopx-randomValueStart) );
    let randomValueEnd = (Math.floor(Math.random() * (max - min +1)) + min); 

    min = Math.ceil(0);
    max = Math.floor( (stopy-1) );
    let randomValueStartD = (Math.floor(Math.random() * (max - min +1)) + min);

    let randomValue:object = {
      xS:(randomValueStart*10),
      xW:(randomValueEnd*10),
      yS:(randomValueStartD*10),
      yH:10
    }
    
    return randomValue;    
  }

  randomEngineSolo(pos:string){
    let max:number;
    let min = Math.ceil(0);
    if(pos =="x") max = (Math.floor( (this.PlaygroundWidth/10) -1) );
    if(pos =="y") max = (Math.floor( (this.PlaygroundHeight/10) -1) );
    
    let solo = (Math.floor(Math.random() * (max - min +1)) + min) * 10; 
    
    return solo;
  }

}
