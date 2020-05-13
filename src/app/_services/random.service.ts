import { Injectable } from '@angular/core';
import { Lines } from '../_interfaces/lines';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  PlaygroundWidth:number;
  PlaygroundHeight:number; 
  covemanCellComplete:number; 
  
   

  constructor() { }

  playBorder(Playgroundwidth:number, Playgroundheight:number){    
    this.PlaygroundWidth = Playgroundwidth;
    this.PlaygroundHeight = Playgroundheight;
  }


// for lines
  randomEngine(linewith:number, covmancell:number){ 
    this.covemanCellComplete = linewith + covmancell;
     
    let Dimensions:Lines[]=[
      {xS:200, xW:10, yS:30, yH:80},
      // {xS:50, xW:100, yS:0, yH:lineWith}
      {xS:covmancell, xW:10, yS:0, yH:(covmancell*5)},
      {xS:covmancell, xW:10, yS:covmancell*6, yH:((this.PlaygroundHeight - covmancell*6) - covmancell*3)}
    ]; 
       
       
    let preDimensions:any;   
    
    let i:number= 0; 
    while(i <= 10){
      preDimensions = this.randomEngineXY();
      Dimensions.push(preDimensions);
      
      i++;
    }  
    return Dimensions;
  }

  randomEngineXY(){
       
    let minX = Math.ceil(1);    
    let maxX = Math.floor(this.PlaygroundWidth/this.covemanCellComplete);    
    let randomValueStartX = ( (Math.floor(Math.random() * (maxX - minX +1)) + minX) *(this.covemanCellComplete) );

    let i:boolean=false, randomValueW:number;
    let minW = Math.ceil(3);    
    let maxW = Math.floor(this.PlaygroundWidth/10);  

    while(!i){
      randomValueW = ( Math.floor(Math.random() * (maxW - minW +1)) + minW )*10;
     
      if( (this.PlaygroundWidth - (randomValueStartX + randomValueW) ) < (30) )
        randomValueW = this.PlaygroundWidth - randomValueStartX;
      if( 
        randomValueStartX <= this.covemanCellComplete 
        && (randomValueW + this.covemanCellComplete ) >= this.PlaygroundWidth
      ) randomValueW = randomValueW - 2*this.covemanCellComplete;
      if(this.PlaygroundWidth >= (randomValueStartX + randomValueW) ) i=true;     
    }

    let minY = Math.ceil(1);
    let maxY = Math.floor(this.PlaygroundHeight/this.covemanCellComplete -1);
    let randomValueStartY = ( (Math.floor(Math.random() * (maxY - minY +1)) + minY) *(this.covemanCellComplete) -10 );
    
    
    
/*
    min = Math.ceil(1);
    max = Math.floor( (stopx-randomValueStart) );
    let randomValueEnd = (Math.floor(Math.random() * (max - min +1)) + min); 
*/
    let randomValue:object = {
      xS:randomValueStartX,
      xW:randomValueW, //(randomValueEnd*35),
      yS:randomValueStartY, // (randomValueStartD*10),
      yH:10
    }
    
    return randomValue;
  }

}
