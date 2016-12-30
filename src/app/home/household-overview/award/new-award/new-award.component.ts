import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-new-award',
  templateUrl: './new-award.component.html',
  styleUrls: ['./new-award.component.scss']
})
export class NewAwardComponent implements OnInit {

  showDialogNewAward:boolean=false;
  @Input() visible:boolean;
  constructor() { }

  ngOnInit() {
  }

}
