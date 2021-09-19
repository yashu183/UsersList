import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
  styleUrls: ['./use.component.css']
})
export class UseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("its in ... !!!")
  }

}
