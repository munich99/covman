import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { KeystrokeService } from './services/keystroke.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Survival Man'; 
  
  constructor(public _KeystrokeService:KeystrokeService){    
    }

  public keyDirection = fromEvent(document, 'keydown');

  // Subscribe to start listening for press-key events
  public keyForDirection = this.keyDirection.subscribe((evt: KeyboardEvent) => {
    // pressdown key sending to service
    this._KeystrokeService.sendMessage(evt.key);
  });
  
}
