import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit {

  pickerCell = [
    {erstes:'#ff0000', zweites:'#00ff00'},
    {erstes:'#ffff00', zweites:'#00ffff'},
    {erstes:'#ffffff', zweites:'#0000ff'}
  ];

  presentColor:string;

  constructor() { }

  ngOnInit() {  
  }

  change(event:any){
    this.presentColor = event.toElement.style.backgroundColor;
    console.log(this.presentColor, "presentColor");    
  }

}
