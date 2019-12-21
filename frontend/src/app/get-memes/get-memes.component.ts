import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-memes',
  templateUrl: './get-memes.component.html',
  styleUrls: ['./get-memes.component.css']
})
export class GetMemesComponent implements OnInit {

  string = 'get your memes';
  
  constructor() { }

  ngOnInit() {
  }

}
