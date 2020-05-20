import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { KeystrokeService } from './services/keystroke.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("myName", {static: true}) myName: ElementRef;

  title = 'Survival Man'; 
  // name = new FormControl('');
  name = new FormControl('', Validators.required);
  
  constructor(public _KeystrokeService:KeystrokeService){    
    }

    ngOnInit(){
      
      this.myName.nativeElement.focus();

      
      
    }

    

  public keyDirection = fromEvent(document, 'keydown');

  // Subscribe to start listening for press-key events
  public keyForDirection = this.keyDirection.subscribe((evt: KeyboardEvent) => {
    // pressdown key sending to service
    this._KeystrokeService.sendMessage(evt.key);
  });
  
}
