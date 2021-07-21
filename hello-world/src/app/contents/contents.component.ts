import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../Content';
import { CONTENTS } from '../mock-contents';
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent implements OnInit {
  contents: Content[] = CONTENTS;
  color = '';
  @Input() content: {
    header: string;
    context: string;
    color: any;
  } = {
    header: '',
    context: '',
    color: '',
  };

  @Output() exportColor = new EventEmitter();
  toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setColor(value: any) {
    this.exportColor.emit(value);
  }

  isToggle() {
    this.toggle = !this.toggle;
  }
}
