import { Component, OnInit } from '@angular/core';


/*
    ng g c shared/sidebar --skipTests -is

*/
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li{
        cursor:pointer
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
