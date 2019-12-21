import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-memes',
  templateUrl: './add-memes.component.html',
  styleUrls: ['./add-memes.component.css']
})
export class AddMemesComponent implements OnInit {

  string = 'add your memes';

  constructor() {
  }
  ngOnInit() {
  }
}
