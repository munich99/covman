import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covman';  

  // public clicks = fromEvent(document, 'click').subscribe(x => console.log(x, "click"));

    public mouseMoves = fromEvent(document, 'click');

    // Subscribe to start listening for mouse-move events
    public subscription = this.mouseMoves.subscribe((evt: MouseEvent) => {
    // Log coords of mouse movements
    console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
  });

  
}
