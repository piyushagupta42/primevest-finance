import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 
  activeProcess = 'investment';

  changeProcess(process: string) {

    this.activeProcess = process;

  }

  activeFaq:number=0;

faqList=[

{

question:"How long does business loan approval take?",

answer:"Most business loan applications are reviewed and approved within 24–72 hours after successful document verification."

},

{

question:"What documents are required for a loan?",

answer:"Basic KYC documents, business proof, bank statements and income-related documents are generally required."

},

{

question:"Can I start investing with a small amount?",

answer:"Yes. You can begin your investment journey with a small amount and gradually increase your portfolio over time."

},

{

question:"How can I claim my insurance policy?",

answer:"Simply contact our support team, submit the required claim documents and we'll guide you through the process."

},

{

question:"Is my personal information secure?",

answer:"Absolutely. We use advanced security standards and encrypted systems to keep all your personal information safe."

}

];

toggleFaq(index:number){

this.activeFaq=

this.activeFaq===index

?

-1

:

index;

}

testimonials=[

{

name:"Rahul Sharma",

role:"Investment Client",

image:"assets/images/client1.jpg",

review:"PrimeVest helped me invest with confidence. Their guidance was transparent, professional and tailored to my financial goals."

},

{

name:"Priya Mehta",

role:"Business Owner",

image:"assets/images/client2.jpg",

review:"The business loan process was quick and completely hassle-free. I received expert support from application to approval."

},

{

name:"Amit Verma",

role:"Insurance Client",

image:"assets/images/client3.jpg",

review:"Excellent insurance consultation with clear policy explanations and outstanding customer support throughout the journey."

}

];
}
