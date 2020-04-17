import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovpositionService {

  schranke:number;

  constructor() { }

  givePositon(posX:number, posY:number){
    if(posX>this.schranke)
    return "permission not" + posX;
    // console.log(posX,"X from covpostion service ");
    // console.log(posY,"Y from covpostion service ");
  }
  fetchLines(line:object){

    // let cars = line;
    let i = 0;    

while (line[i]) {
  console.log(line[i],"funkt");  
  i++;
}

    // console.log(line.argument);
   //  while (i=0; line.length < 5; i++){
   // this.schranke = line[0].xS;
  }

  

}
