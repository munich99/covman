import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

constructor() { }

makeSize(){
  console.log("hallo from PlaygroundService")
}

}
