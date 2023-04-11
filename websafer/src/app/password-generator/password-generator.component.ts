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

  generatePassword(): any
  {
    let chars: string = '';
    if(this.AZ)
    {
      chars=chars+'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(this.az)
    {
      chars=chars+'abcdefghijklmnopqrstuvwxyz'
    }
    if(this.num)
    {
      chars=chars+'0123456789'
    }
    if(chars=='')
    {
      return 0
    }
    let password = '';
    for (let i = 0; i < this.lenval; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    this.passwd=password;
    this.checkpasswdstre()
    return 1
  }


  checkpasswdstre()
  {
    if(this.passwd.length<8)
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
}
