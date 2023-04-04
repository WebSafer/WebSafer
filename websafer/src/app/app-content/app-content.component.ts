import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {


  page:number = 0;

  constructor(private pageService: PageService) { }

  ngOnInit(): void
  {
    this.pageService.getPage().subscribe(page => {this.page = page;});
  }

}
