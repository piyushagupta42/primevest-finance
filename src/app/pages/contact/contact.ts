import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
showSuccessPopup = false;

onSubmit() {
  this.showSuccessPopup = true;
}

closePopup() {
  this.showSuccessPopup = false;
}
}

