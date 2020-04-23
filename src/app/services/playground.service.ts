import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

constructor() { }

makeSize(aboutHight:number){
  console.log(aboutHight, "hallo from PlaygroundService")
}

}
