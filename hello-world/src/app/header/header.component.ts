import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`<header>
            <h1>{{title}} </h1>
            </header>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = "Do not go gentle into that good night";
  
}
