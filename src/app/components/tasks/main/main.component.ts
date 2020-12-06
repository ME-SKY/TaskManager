import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // defaultButtons: ButtonInterface [] = [
  //   {
  //     button: 'back',
  //     params: {
  //       path: ''
  //     }
  //   },
  //   {
  //     button: 'edit',
  //     params: {
  //       path: ''
  //     }
  //   },
  //   {
  //     button: 'add',
  //     params: {
  //       path: ''
  //     }
  //   },
  //   {
  //     button: 'delete',
  //     params: {
  //       path: ''
  //     }
  //   }
  // ];
  //
  // buttons = this.defaultButtons;

  constructor() { }

  ngOnInit(): void {
  }

}
