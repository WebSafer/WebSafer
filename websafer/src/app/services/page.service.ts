import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pagenr: number
  private page = new Subject<number>();

  constructor()
  {
    this.pagenr=0;
  }

  nextpage()
  {
    this.pagenr += 1;
    this.page.next(this.pagenr);
  }
  prevpage()
  {
    this.pagenr -= 1;
    this.page.next(this.pagenr);
  }

  getPage(): Observable<number>
  {
    return this.page.asObservable();
  }
}
