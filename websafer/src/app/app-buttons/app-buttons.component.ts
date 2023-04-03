import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  templateUrl: './app-buttons.component.html',
  styleUrls: ['./app-buttons.component.scss']
})
export class AppButtonsComponent implements OnInit {

  faRight = faArrowRight;
  faLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
