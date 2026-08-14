import { Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [RouterModule,CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  activeIndex = 0;

toggleFaq(index: number) {
  this.activeIndex = this.activeIndex === index ? -1 : index;
}
}
