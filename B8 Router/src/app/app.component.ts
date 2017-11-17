import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: './app/app.main.html',
 
})
export class AppComponent implements  OnInit{ 
  name = 'Angular';

  ngOnInit() {}
  
}