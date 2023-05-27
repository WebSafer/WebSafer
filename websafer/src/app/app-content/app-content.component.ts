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
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0####\xa0\xa0\xa0\xa0\xa0\xa0######\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\n"+
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0##\xa0\xa0\n"+
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0##\xa0\xa0\n"+
      "\xa0##\xa0\xa0#\xa0\xa0##\xa0\xa0\xa0######\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0#\xa0##\xa0\xa0\xa0######\xa0\xa0\n"+
      "\xa0#########\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\n"+
      "\xa0#########\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\n"+
      "\xa0##\xa0\xa0\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\xa0######\xa0\xa0\xa0\xa0####\xa0\xa0\xa0\xa0\xa0\xa0######\xa0\xa0\xa0\xa0##\xa0\xa0\xa0##\xa0\xa0\xa0#######\xa0\xa0\n";
      // this.typewriterEffect(5, targetDiv,text,page);
      // await this.wait(6*(text.length),page);
      targetDiv.innerHTML = "<pre id='welcome'>"+text+"</pre>";
      text = "to WebSafer";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      targetDiv.innerHTML += "<h1>"+text+"</h1>";
      let lines = ["In today's digital age, the importance of cybersecurity cannot be overstated. With the ever-growing reliance on technology, we face numerous threats that compromise our personal and sensitive information. From password breaches and malicious viruses to phishing attacks and the risks associated with social media platforms, our valuable data is constantly at risk. This website aims to shed light on the significance of protecting our passwords, understanding and combating viruses, recognizing and avoiding phishing attempts, and safeguarding our personal information in the era of social media."]
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        targetDiv.innerHTML += "<p>"+texter+"</p>";
      }

    }
    else if (page==1)
    {
      text = "What is cybersecurity?";
      targetDiv.innerHTML = "<h1>"+text+"</h1>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Cybersecurity is a process purposed to protect data and companies internal systems against the threats, which are posed by cyber attacks. Moreover, it is supposed to immune information systems to activities that violate their trust and authenticity.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="Most frequently, after-effects of cyber attacks are leakage of important data.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="With using proper procedures we can avoid harmful effects of cybercriminal's activities.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==2)
    {
      text = "Pa$$w0rds!";
      targetDiv.innerHTML = "<h1>"+text+"</h1>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="In today's world, when a significant part of our lives takes place on the Internet, the security of our personal data and online accounts becomes more and more important. A lot of people use email, online banking, messaging applications, social media and online shopping. All these places contain our personal data, and none of us would like them to fall into the wrong hands. One of the most important ways to protect our private information is to use strong passwords and manage them properly. Passwords are the basic defense against unauthorized access to our accounts. A proper password is crucial for protecting our data and can help avoid many problems, such as identity theft, loss of money, or privacy violations. In this article, we will discuss how to create strong passwords, what are the best practices for managing them, and what tools can help us do this.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==3)
    {
      text = "Creating strong passwords";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="A strong password is one that is difficult for third parties to guess, but at the same time easy for you to remember. A well-designed password should consist of at least 8 characters, include a combination of uppercase and lowercase letters, numbers, and special characters, and be unique. The longer and more complex the password, the more difficult it is to crack. Unfortunately, many people still use simple and easy-to-guess passwords, such as animal names or birth dates. That's why it's important for anyone who cares about the security of their data to use strong passwords and change them regularly. A strong password is a fundamental element of online security, and its proper design can help us avoid many unpleasant situations.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="Here are some rules worth following to create a strong password:";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      let lines = ["<b>Length</b>: The minimum length for a password is 8 characters, but it is much better to use passwords with a length between 12 and 16 characters. Generally, the longer the password, the better.","<b>Complexity</b>: The password should be composed of different characters, such as uppercase and lowercase letters, numbers, and special characters. The more different characters, the better.","<b>Uniqueness</b>: Don’t use the same password for multiple accounts. Create unique passwords for each account.","<b>Substitute</b> some letters with numbers or special characters: The easiest way to create a strong password that is also easy to remember is to replace letters with numbers and special characters. For example, you can replace \"a\" with \"@\", \"i\" with \"!\", \"S\" with \"5\" or \"$\".","<b>No repetitions and patterns:</b> Avoid using patterned or repeating sequences of characters in your passwords, such as abc123abc, aaabbbccc, or XtomXjerryX.","<b>Don't use universal and popular words or phrases:</b> Avoid using dictionary words, i.e., words found in dictionaries, encyclopedias, names related to books and movies, names or surnames of famous people, names of countries, cities and so on.","<b>Don't use personal and sensitive information:</b> Avoid using names, surnames, nicknames, hobbies, interests, pet names, addresses, and other data that could be guessed by someone who knows you.","<b>Don’t use keyboard sequences that are next to each other on the keyboard:</b> Avoid using sequences such as 123456789 or qwerty."]
      let inside=""
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        inside += "<li>"+texter+"</li>";
      }
      targetDiv.innerHTML += "<ol>"+inside+"</ol>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==4)
    {

      text = "How to create a password that is strong and easy to remember?";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Creating a strong password that is also easy to remember may seem like a difficult task, but there are ways to increase the security of our passwords and make them easier to remember. One of them is the use of mnemonics, which is a memorization technique that involves the use of associations or abbreviations to remember a string of characters. For example, to create a password, we can use the sentence \"I love dogs, especially my Saint Bernard named Reksio from 2022\" and take the first letter of each word: \"Ild,emSBnRf2022\". Additionally, some letters can be replaced with special characters or numbers: \"1ld,3m$BnRf2o22\". Here are a few other examples of passwords built on the same principle:";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      let lines = ["\„RL$gi9mB2k15\” - \„Robert Lewandowski 5 goals in 9 minutes Bayern 2015\”","\„2:0Pv.GU32o16q\” - \„2:0 Poland vs. Germany UEFA EURO 2016 qualifying\”","\„1lE$meh4c=f2o2i\” - \„I love Ed Sheeran's music, especially his album called\”=\” from 2021.\”","\„iwiLs.2001ala$\” - \„I worked in London City Centre since 2001 and looked after money.\”"]
      let inside=""
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        inside += "<li>"+texter+"</li>";
      }
      targetDiv.innerHTML += "<ul>"+inside+"</ul>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==5)
    {

      text = "How to keep our passwords secure?";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="In addition to creating strong passwords, it is also important to know how to keep our passwords secure. Here are some tips:";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      let lines = ["<b>Don’t share your password:</b> Do not share your password with anyone, even if it is a trusted person, friend, or even a family member. The risk of data leakage increases with each additional person who knows your password. ","<b>Change your password regularly: </b> Regularly changing your password every few months increases the level of security. However, remember to make sure the new password is strong and unrelated to the previous one. ","<b>Use unique passwords: </b> Each website should have a different password. Once your password and login or email is stolen from one site, scammers can try to use those login details on many other websites, including banking, social media, and online shopping platforms. ","<b>Avoid saving passwords: </b> Saving passwords on paper, in a notebook, or on a computer is not the best practice. A safer idea is to save a hint that will remind you of what the password is. If you save your password somewhere, make sure no one else has access to it. ","<b>Change leaked passwords:</b> If you suspect that any of your passwords may have been compromised, change them immediately. "]
      let inside=""
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        inside += "<li>"+texter+"</li>";
      }
      targetDiv.innerHTML += "<ol>"+inside+"</ol>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==6)
    {
      text = "Password manager";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="If we use many websites, remembering all the passwords can be quite a challenge. Fortunately, there is software that can help us with this. A password manager is a computer program that helps securely store and manage your passwords. The password manager works like a safe, storing all our passwords in one place. To access these passwords, we only need to enter one master password, which unlocks the password manager. The password manager can also generate strong and unique passwords for us so we don't have to worry about our passwords being too weak. All stored data is encrypted, which affects the security of our passwords.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      text = "Password creator";
      targetDiv.innerHTML += "<h3>"+text+"</h3>";
      texter="A password creator is a powerful tool that generates strong, random passwords with a combination of letters, numbers, and special characters. By using a password creator, you can ensure that your passwords are highly resistant to hacking attempts and significantly reduce the risk of unauthorized access to your accounts.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
    }
    else if (page==7)
    {

      text = "Two-step authentication";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Password strength is really important, but still our password can be stolen by cybercriminals and used for evil purposes. We can prevent this by using multi-factor authentication. Multi-Factor Authentication (MFA) is a security process used to authenticate users by more than one way of verification. Mostly it is used in the form of two-factor verification.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="There are three basic formats of multi-factor security processes:";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      let lines = ["Physical - it validates by scan identical elements, an example employee card. ","Knowledge - checks if a given password or any personal identification number (an example PIN), which is remembered by the user is correct. ","Biometric - it validates by verification of the user's fingers or face, also his voice. This authentication is often used in mobile phones (Touch/Face ID). "];
      let inside="";
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        inside += "<li>"+texter+"</li>";
      }
      targetDiv.innerHTML += "<ol>"+inside+"</ol>";
      texter="One of the most commonly used security processes in social media and popular web pages or public use applications is verify password as a first step, and as a second step verify multi-digit code, which is randomly generated, sent on user's telephone number and if it's written correctly - the algorithm authenticates him.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==8)
    {
      text = "Dongle for passwords";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Another way to increase the security of our passwords is a hardware security key. It is a special device secured with a cryptographic key that helps to store our passwords securely,  and enables us to quickly and securely log in to various online services. Hardware keys, despite their small and handy construction, have complex mathematical algorithms that protect our passwords. That is why hardware keys are very hard to hack. The hardware security key is a very convenient tool for managing passwords, because we no longer have to remember all the passwords, but only the password for our key. ";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==9)
    {
      text = "Viruses and Antivirus Software";
      targetDiv.innerHTML = "<h1>"+text+"</h1>";
      text = "Types of Viruses";
      targetDiv.innerHTML += "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Viruses come in various forms, each with its own unique characteristics and capabilities. Understanding the different types of viruses can help users grasp the potential risks they pose. Some common types of viruses include:";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      let lines = ["<b>Worms:</b>  Worms are self-replicating malware that can spread rapidly across networks. By exploiting vulnerabilities in operating systems or network protocols, worms can propagate and consume network resources, leading to system slowdowns or crashes. ","<b>Trojans:</b>  Trojans disguise themselves as legitimate software or files, tricking users into unwittingly installing them. Once inside a system, trojans can perform various malicious activities, such as stealing sensitive information, creating backdoors for remote access, or facilitating further malware downloads. ","<b>Ransomware:</b>   Ransomware has gained notoriety in recent years due to its ability to encrypt files on victims' systems, rendering them inaccessible. Attackers then demand a ransom in exchange for the decryption key. Ransomware attacks can cause significant financial and operational damage to individuals and organizations. ","<b>Spyware:</b>   Spyware is a type of malware that operates surreptitiously, monitoring user activities without their knowledge or consent. It can capture sensitive information, such as login credentials or financial data, and relay it to unauthorized third parties. Spyware compromises privacy and exposes users to risks such as identity theft."];
      let inside="";
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        inside += "<li>"+texter+"</li>";
      }
      targetDiv.innerHTML += "<ul>"+inside+"</ul>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==10)
    {
      text = "Effective Virus Protection Strategies";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="In addition to installing reliable antivirus software, users should adopt proactive virus protection strategies to enhance computer security. Here are some recommended practices:";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      let lines = ["<b>Installing reputable antivirus software:</b>   Choose a well-established antivirus program from a trusted vendor. Ensure it offers real-time scanning, automatic updates, and robust malware detection capabilities. ","<b>Regular scans:</b>   Perform full system scans and schedule regular scans to identify and eliminate potential threats. Regular scans help detect viruses that may have evaded real-time protection. ","<b>Exercise caution with downloads and email attachments:</b>    Be vigilant while downloading files or opening email attachments, particularly from unknown or suspicious sources. Scan files before opening them to minimize the risk of infection. ","<b>Keep operating systems and software up to date:</b>   Install updates promptly to patch security vulnerabilities that may be exploited by viruses. Regularly update not only the antivirus software but also the operating system and other installed applications. ","<b>Practice safe browsing habits:</b>    Avoid visiting untrustworthy websites, clicking on suspicious links, or downloading files from unverified sources. Stick to reputable websites and be cautious of pop-ups or prompts that may contain malicious links or downloads. Consider using browser extensions or plugins that provide an extra layer of protection against phishing attempts and malicious websites. ","<b>Enable firewall protection:</b>   Activate the firewall on your computer or network to create a barrier between your system and potential threats. Firewalls monitor incoming and outgoing network traffic, blocking unauthorized access and suspicious activities. ","<b>Use strong, unique passwords:</b>   Secure your accounts with strong, complex passwords and avoid using the same password for multiple accounts. Consider utilizing a password manager to generate and store passwords securely. ","<b>Educate yourself about phishing attacks:</b>   Be aware of phishing techniques used by cybercriminals to trick users into revealing sensitive information. Exercise caution when sharing personal information online or responding to unsolicited emails or messages requesting sensitive data. ","<b>Backup important data:</b>   Regularly backup your important files and data to an external storage device or cloud service. In the event of a virus infection or ransomware attack, having backups ensures that you can restore your data without paying the ransom or suffering permanent loss."];
      let inside="";
      for(let texter of lines)
      {
        // this.typewriterEffect(speed, targetDiv,texter,page);
        // await this.wait(speed*(texter.length+3),page);
        inside += "<li>"+texter+"</li>";
      }
      targetDiv.innerHTML += "<ul>"+inside+"</ul>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==11)
    {
      text = "Importance of Antivirus Software";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="Antivirus software plays a crucial role in safeguarding computer systems from viruses, malware, and other malicious software. It acts as a powerful shield, detecting, preventing, and eliminating threats before they can wreak havoc. By scanning files, emails, websites, and other sources of data, antivirus software identifies malicious code and neutralizes it, ensuring the security and integrity of the system. Furthermore, antivirus programs protect sensitive information and prevent unauthorized access, maintaining the privacy and confidentiality of users' data.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      text = "Role of Updates";
      targetDiv.innerHTML += "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      texter="Regular updates are essential for antivirus software to remain effective in the face of evolving threats. Cybercriminals are constantly devising new techniques to evade detection, making it crucial for antivirus vendors to release updates regularly. These updates include the latest virus definitions, security patches, and enhanced detection algorithms, which strengthen the antivirus software's ability to identify and eliminate both known and unknown threats. Without regular updates, antivirus software may become outdated and ineffective against emerging viruses, leaving systems vulnerable to attack.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==12)
    {
      text = "Phishing and Spoofing";
      targetDiv.innerHTML = "<h1>"+text+"</h1>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="In today's world, where most activities have moved to the internet, cybersecurity is becoming increasingly important. However, with the development of technology, new threats are emerging that are not always easy to identify. One of the most commonly used methods by cybercriminals is phishing and spoofing.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="<b>Phishing</b> is a type of scam that aims to obtain confidential information from a user, such as passwords or credit card data. Usually, phishing occurs through emails that appear to come from trusted sources, such as banks or companies that the user is interested in. In reality, these emails are fake and aim to convince the user to click on a suspicious link or download malicious software.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="<b>Spoofing</b>, on the other hand, is a method in which a cybercriminal impersonates another person or institution, such as a bank or a company, and sends fake emails to obtain confidential information. Similarly to phishing, these emails appear to be genuine, and the links to websites look like original pages, which can lead the user to provide their data.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }
    else if (page==13)
    {
      text = "How can we protect ourselves?";
      targetDiv.innerHTML = "<h3>"+text+"</h3>";
      // this.typewriterEffect(speed, targetDiv,text,page);
      // await this.wait(speed*(text.length+3),page);
      let texter="So how can we protect ourselves from such attacks? First of all, we need to pay attention to the email address of the sender. In the case of phishing and spoofing, the address may seem similar to the original one but with slight changes. It is also important to be cautious about the language used in the email. Usually, fake emails contain spelling and grammatical errors, which is not typical of official messages.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="The best way to protect yourself from phishing and spoofing is to use antivirus software and software for detecting spam. Thanks to this, most fake emails will be automatically filtered, and the user will not have to worry about their safety.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      texter="To sum up, cybersecurity is becoming increasingly important, especially in the era of universal access to the internet. Users should pay attention to suspicious emails, especially those with suspicious links, and avoid clicking on them. They should also use antivirus and spam detection software to protect their data from cybercriminals.";
      targetDiv.innerHTML += "<p>"+texter+"</p>";
      targetDiv.innerHTML += "<br><br><br>";
    }

  }


}
