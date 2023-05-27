import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './app-buttons.component.html',
  styleUrls: ['./app-buttons.component.scss']
})
export class AppButtonsComponent implements OnInit {

  faRight = faArrowRight;
  faLeft = faArrowLeft;
  page:number = 0;
  maxpage:number = 13;

  constructor(private pageService: PageService) { }

  ngOnInit(): void
  {
    this.pageService.getPage().subscribe(page => {this.page = page;});
  }

  next()
  {
    this.pageService.nextpage();
  }

  previous()
  {
    this.pageService.prevpage();
  }

}
