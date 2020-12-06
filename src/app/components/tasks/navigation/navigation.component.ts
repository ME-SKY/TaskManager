import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

// export interface ButtonInterface {
//   button: string;
//   isOn: boolean;
//   params: object;
// }

export const DEFAULT_BUTTONS = {
  back: {
    button: 'back',
    isOn: false,
    params: {},
  },
  new_task: {
    button: 'new_task',
    isOn: true,
    params: {},
  },
  edit_task: {
    button: 'edit_task',
    isOn: false,
    params: {},
  },
  delete_task: {
    button: 'delete_task',
    isOn: false,
    params: {},
  }
};

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  @Output() somethingChanged = new EventEmitter();

  // defaultButtons = {
  //   back: {
  //     button: 'back',
  //     isOn: false,
  //     params: {},
  //   },
  //   new_task: {
  //     button: 'new_task',
  //     isOn: true,
  //     params: {},
  //   },
  //   edit_task: {
  //     button: 'edit_task',
  //     isOn: false,
  //     params: {},
  //   },
  //   delete_task: {
  //     button: 'delete_task',
  //     isOn: false,
  //     params: {},
  //   }
  // };

  buttons = DEFAULT_BUTTONS;

  subs: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
    // this.route.url.subscribe(x => {
    //   console.log('url is');
    //   console.log(x);
    // });
    this.subs = this.location.onUrlChange(
    (url, state) => {

      // switch () {
      //
      // }
      switch (url) {
        case '/task':
          console.log('task');
          this.buttons.back.isOn = true;
          this.buttons.edit_task.isOn = true;
          this.buttons.delete_task.isOn = true;
          this.buttons.new_task.isOn = false;
          break;
        case '/list':
          console.log('list');
          this.buttons = DEFAULT_BUTTONS;
          break;
        case '/edit':
          this.buttons.back.isOn = true;
          this.buttons.edit_task.isOn = false;
          this.buttons.delete_task.isOn = false;
          this.buttons.new_task.isOn = false;
          console.log('edit');
          break;
        default:
          console.log('default');
          break;
      }
      console.log(url);
    });

    console.log(this.location.path());
  }

  ngOnInit(): void {
    console.log(this.location.path());
    this.subs = this.location.subscribe((ev: PopStateEvent) => {
      console.log(ev);
    });
  }

  ngOnDestroy(): void{
    console.log(this.location.path());
    this.subs.unsubscribe();
  }

}
