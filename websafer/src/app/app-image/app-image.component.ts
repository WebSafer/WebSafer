import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-image',
  templateUrl: './app-image.component.html',
  styleUrls: ['./app-image.component.scss']
})
export class AppImageComponent implements OnInit {


  page:number = 0;

  constructor(private pageService: PageService) { }

  ngOnInit(): void
  {
    this.pageService.getPage().subscribe(page => {this.page = page;});
  }

}
