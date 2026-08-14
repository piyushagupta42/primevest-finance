import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-blog',
  imports: [CommonModule,RouterModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {}
