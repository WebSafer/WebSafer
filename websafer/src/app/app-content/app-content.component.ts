import { PasswordGeneratorComponent } from './../password-generator/password-generator.component';
import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  page:number = 0;

  constructor(private pageService: PageService)
  {

  }

  ngOnInit(): void
  {
    this.pageService.getPage().subscribe(page => {
    const targetDiv2 = document.getElementById("content"+this.page.toString()) as HTMLDivElement;
    targetDiv2.style.display="none";
    this.page = page;
    const targetDiv = document.getElementById("content"+this.page.toString()) as HTMLDivElement;
    targetDiv.style.display="block";
    this.printPageContent(this.page, targetDiv);});

  }

  ngAfterContentInit()
  {
    const targetDiv = document.getElementById("content0") as HTMLDivElement;
    targetDiv.style.display="block";
    this.printPageContent(0, targetDiv);
  }

  wait(interval: number, page:number): Promise<void> {
    return new Promise((resolve) => {
      const intervalId2 = setInterval(() => {
        if(page==this.page)
        {
          clearInterval(intervalId2);
        }
        resolve();
      }, interval);
    });
  }

  typewriterEffect(delay: number, targetDiv: HTMLDivElement, text:string, page:number)
  {
    // let text:string=targetDiv.innerHTML
    let i = 0;
    const intervalId = setInterval(() => {
      if (i > text.length || this.page!=page) {
        targetDiv.innerHTML = targetDiv.innerHTML.slice(0, -1);
        clearInterval(intervalId);
      }
      else
      {
      targetDiv.innerHTML = targetDiv.innerHTML.slice(0, -1);
      targetDiv.innerHTML += text.charAt(i) + "|";
      i++;
      }
    }, delay);

  }

  async printPageContent(page: number, targetDiv: HTMLDivElement)
  {
    let speed:number = 40;
    let text:string=""
    if (page==0)
    {
      targetDiv.innerHTML = "";
      text =
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0####\xa0\xa0\xa0\xa0\xa0\xa0######\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0#######\n"+
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0##\n"+
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0##\n"+
      "\xa0##\xa0\xa0#\xa0\xa0##\xa0\xa0\xa0######\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0#\xa0##\xa0\xa0\xa0######\n"+
      "\xa0#########\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\n"+
      "\xa0#########\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\n"+
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0######\xa0\xa0\xa0\xa0####\xa0\xa0\xa0\xa0\xa0\xa0######\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0#######\n";
      // this.typewriterEffect(5, targetDiv,text,page);
      // await this.wait(6*(text.length),page);
      targetDiv.innerHTML = "<pre>"+text+"</pre>";
      text = "Introduction";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      targetDiv.innerHTML += "<h2>"+text+"</h2>";
      let lines = ["Password strength is really important, but still it can be stolen by cybercriminals and used for evil purposes. We can prevent this by using multi-factor authentication. Multi-Factor Authentication (MFA) is a security process used to authenticate users by more than one way of verification. Mostly it is used in the form of two-factor verification. There are three basic formats of multi-factor security processes:"," •	Physical – it validates by scan identifical elements, an example employee card"," •	Knowledge – checks if given password or any personal identification number (an example PIN), which is remembered by the user is correct."," •	Biometric – it validates by verificate user’s fingers or face, also his voice. This authentication is often used in mobile phones (Touch/Face ID)","One of the most commonly used security processes in social media and popular web pages or public use applications is verify password as a first step, and as a second step verify multi-digit code, which is randomly generated, sent on user’s telephone number and if its wrote correct - the algorithm authenticate him."]
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        targetDiv.innerHTML += "<p>"+texter+"</p>";
      }

    }
    else if (page==1)
    {
      text = "Definition of a strong password";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==2)
    {
      text = "Rules for creating strong passwords";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==3)
    {

      text = "How to take care of your password?";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==4)
    {

      text = "How to create a password that is strong and easy to remember";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==5)
    {

      text = "Examples of strong password that is easy to remember";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==6)
    {
      text = "Password generator";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
    }
    else if (page==7)
    {

      text = "Password manager";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==8)
    {
      text = "Two-step authentication";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }
    else if (page==9)
    {
      text = "Dongle for passwords";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius maximus diam vel facilisis. Donec consectetur eleifend ligula eu sodales. Suspendisse ac augue sit amet tortor lobortis molestie. Nullam convallis nunc nunc, euismod tempus est aliquam sit amet. Maecenas egestas felis id tincidunt tincidunt. Donec tincidunt nec nibh eget eleifend. Nunc purus risus, commodo eget nisl tincidunt, rhoncus suscipit justo. Praesent mattis efficitur diam. Sed eu massa nec ex dignissim rhoncus at in lectus. Nam in viverra mauris. Pellentesque varius tortor sit amet tincidunt consequat. In rhoncus mauris mi, ut commodo lacus mattis sed. Duis pretium ultrices diam ut ultrices. In vehicula, felis at gravida porttitor, nulla justo dapibus nisi, quis bibendum lorem ex quis massa. Phasellus finibus turpis purus.Sed vitae leo sit amet turpis faucibus pellentesque. Duis placerat elit at leo condimentum, consectetur maximus arcu mollis. Phasellus consectetur dolor et nulla rutrum vestibulum. Aliquam vel justo ante. Sed in metus leo. Cras consequat vestibulum velit, sodales iaculis nisi facilisis sed. Vestibulum id felis nibh. Fusce tortor tellus, bibendum id sollicitudin eget, condimentum sit amet erat. Proin pretium euismod mauris, ut fringilla dui scelerisque at.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
    }

  }


}
