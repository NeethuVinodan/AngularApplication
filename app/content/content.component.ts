import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
 employee: any;
  constructor() { }

  ngOnInit() {

    this.employee = { "firstname":"Find your favourite cars", "lastname":""};
    
  }

}
