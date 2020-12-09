import {Component, HostListener, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  navActionsLeftMarginPx = 200;
  subs: any;

  @HostListener('window:resize', ['$event'])
  getScreenWidth(): void {

    switch (this.location.path().split('/')[1]) {
      case 'task':
        this.navActionsLeftMarginPx = 0;
        break;
      case 'add-task':
        this.navActionsLeftMarginPx = 0;
        break;
      case 'manage-tasks':
        this.navActionsLeftMarginPx = window.innerWidth <= 600 ? 0 : 200;
        break;
      default:
        break;
    }
  }

  constructor(private location: Location) {

    this.navActionsLeftMarginPx = window.innerWidth <= 600 ? 0 : 200;

    this.subs = this.location.onUrlChange(
      (url, state) => {
        switch (url.split('/')[1]) {
          case 'task':
            this.navActionsLeftMarginPx = 0;
            break;
          case 'manage-tasks':
            this.navActionsLeftMarginPx = window.innerWidth <= 600 ? 0 : 200;
            break;
          case 'list':
            break;
          case 'add-task':
            this.navActionsLeftMarginPx = 0;
            break;
          default:
            break;
        }
      });
  }

  ngOnInit(): void {
    this.navActionsLeftMarginPx = window.innerWidth <= 600 ? 0 : 200;
  }

}
