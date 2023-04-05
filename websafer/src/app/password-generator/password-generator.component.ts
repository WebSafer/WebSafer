import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwd-gen',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  lenval: number = 8;

  constructor() { }

  ngOnInit(): void {
  }

  lenvalchange(event: any)
  {
    this.lenval = event.target.value;
  }


}
