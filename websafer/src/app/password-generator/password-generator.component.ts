import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwd-gen',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  lenval: number = 8;
  passwd: string = "";
  AZ: boolean = true;
  az: boolean = true;
  num: boolean = true;
  passwdstr: string = "Bad";

  constructor() { }

  ngOnInit(): void {
  }

  checkpasswdstre()
  {
    if(this.passwd.length<7)
    {
      this.passwdstr = "Bad"
    }
    else if(this.passwd.length>7 && this.passwd.length<10)
    {
      this.passwdstr = "Good"
    }
    else
    {
      this.passwdstr = "Very good"
    }
  }

  lenvalchange(event: any)
  {
    this.lenval = event.target.value;
  }

  passwdchange(event: any)
  {
    this.passwd = event.target.value;
    this.checkpasswdstre();
  }
  AZchange()
  {
    this.AZ = !this.AZ;
  }
  azchange()
  {
    this.az = !this.az;
  }
  numchange()
  {
    this.num = !this.num;
  }

  generate()
  {
    console.log(this.lenval);
    console.log(this.passwd);
    console.log(this.AZ);
    console.log(this.az);
    console.log(this.num);
  }
}
