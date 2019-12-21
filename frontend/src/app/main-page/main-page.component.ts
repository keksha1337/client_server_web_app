import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  string = 'add your memes';

  constructor() { }

  ngOnInit() {
  }

  public putMemes(): void {
  }
}
