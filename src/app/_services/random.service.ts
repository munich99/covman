import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  PlaygroundWidth:number;
  PlaygroundHeight:number;

 
  dimensions2 = [
    {xS:130, xW:10, yS:0, yH:110},
    {xS:200, xW:90, yS:130, yH:10},
    {xS:40, xW:360, yS:200, yH:10}
  ];

  

  constructor() { }

  playBorder(Playgroundwidth:number, Playgroundheight:number){    
    this.PlaygroundWidth = Playgroundwidth;
    this.PlaygroundHeight = Playgroundheight;
  }

  randomEngine(){  
   
    let preDimensions;
    let Dimensions:object[]=[{xS:130, xW:10, yS:0, yH:110}];     
    let i:number= 0; 
    while(i <= 4){
      preDimensions = this.randomEngineXY( (this.PlaygroundWidth/10), (this.PlaygroundHeight/10) );
      Dimensions.push(preDimensions);
      i++;
    }
   
    preDimensions = this.randomEngineXY( (this.PlaygroundWidth/10), (this.PlaygroundHeight/10) );
    console.log(Dimensions,"zufi");    
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

    let randomValue:object = 
      {xS:(randomValueStart*10), xW:(randomValueEnd*10), yS:randomValueStartD, yH:10}
    
    return randomValue;    
  }

}
