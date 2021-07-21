import { Component, OnInit } from '@angular/core';
import { Content } from '../Content';
import { CONTENTS } from '../mock-contents';
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  contents: Content[]= CONTENTS;
  color = '';
  constructor() { }

  ngOnInit(): void {
  }

}
