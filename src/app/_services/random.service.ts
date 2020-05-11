import { Injectable } from '@angular/core';
import { Lines } from '../_interfaces/lines';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  PlaygroundWidth:number;
  PlaygroundHeight:number; 
  
  Dimensions:Lines[]=[
    {xS:200, xW:300, yS:30, yH:10},
    // {xS:50, xW:100, yS:0, yH:lineWith}
    {xS:30, xW:10, yS:0, yH:200}
  ]; 

  constructor() { }

  playBorder(Playgroundwidth:number, Playgroundheight:number){    
    this.PlaygroundWidth = Playgroundwidth;
    this.PlaygroundHeight = Playgroundheight;
  }

  randomEngine(lineWith:number, covmancell:number){ 
   
    let preDimensions;
   
    
    let i:number= 0; 
    while(i <= 4){
      preDimensions = this.randomEngineXY(lineWith + covmancell);
      this.Dimensions.push(preDimensions);
      
      i++;
    }  
    

    return this.Dimensions;
  }

  randomEngineXY(covmancellcomplete:number){
       
    let minX = Math.ceil(covmancellcomplete/10);
    let maxX = Math.floor( (this.PlaygroundWidth/10) );
    let randomValueStartX = (Math.floor(Math.random() * (maxX - minX +1)) + minX) *10;

    let minY = Math.ceil(1);
    let maxY = Math.floor(this.PlaygroundHeight/covmancellcomplete -1);
    let randomValueStartY = ( (Math.floor(Math.random() * (maxY - minY +1)) + minY) *(covmancellcomplete) -10 );
    

/*


    min = Math.ceil(1);
    max = Math.floor( (stopx-randomValueStart) );
    let randomValueEnd = (Math.floor(Math.random() * (max - min +1)) + min); 



*/
    let randomValue:object = {
      xS:randomValueStartX,
      xW:40, //(randomValueEnd*35),
      yS:randomValueStartY, // (randomValueStartD*10),
      yH:10
    }
    
    return randomValue;
  }

  randomEngineSolo(pos:string){
    console.log(this.Dimensions);
    
    
    let max:number;
    let min = Math.ceil(0);
    if(pos =="x") max = (Math.floor( (this.PlaygroundWidth/10) -1) );
    if(pos =="y") max = (Math.floor( (this.PlaygroundHeight/10) -1) );
    
    let solo = (Math.floor(Math.random() * (max - min +1)) + min) * 10; 
    
    return solo;
  }

}
