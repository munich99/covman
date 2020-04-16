import { Component, ViewChild, OnInit, HostBinding} from '@angular/core';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';



@Component({
  selector: 'app-prefences',
  templateUrl: './prefences.component.html',
  styleUrls: ['./prefences.component.css']
})
export class PrefencesComponent implements OnInit{

  @ViewChild(ColorpickerComponent, {static: false})
  presentPicker:ColorpickerComponent;

  @HostBinding('style.background-color') 
  backgroundColor:string;

  constructor() { }

  ngOnInit(){   

  }

  

  change(){
    console.log(this.presentPicker.presentColor,"presentPicker");
    this.backgroundColor = this.presentPicker.presentColor;

  }

}
