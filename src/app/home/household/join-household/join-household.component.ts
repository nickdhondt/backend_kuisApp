import {Component, OnInit, Input,trigger,animate,transition,style} from '@angular/core';

@Component({
  selector: 'app-join-household',
  templateUrl: './join-household.component.html',
  styleUrls: ['./join-household.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({transform: 'scale3d(.3, .3, .3)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
      ])
    ])
  ]
})
export class JoinHouseholdComponent implements OnInit {

  @Input() visible:boolean;
  constructor() { }

  ngOnInit() {
  }

}
