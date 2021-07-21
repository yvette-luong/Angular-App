import { Component, OnInit } from '@angular/core';
import { Content } from '../Content';
import { CONTENTS } from '../mock-contents';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
//
export class HeaderComponent implements OnInit {
  contents: Content[] = CONTENTS;
  title: string = 'Do not go gentle into that good night';
  titleColor: any = 'black';
  mainTitle: any =
    ' Do not go gentle into that good night - Poem By Dylan Thomas';
  constructor() {}
  ngOnInit(): void {}
  getColor(event: any) {
    this.titleColor = event;
  }
}
