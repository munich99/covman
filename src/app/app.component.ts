import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covman';  

  public keyDirection = fromEvent(document, 'keydown');

    // Subscribe to start listening for press-key events
    public keyForDirection = this.keyDirection.subscribe((evt: KeyboardEvent) => {
    // Log Key Code
    console.log(`key: ${evt.key}`);
  });

  
}
