import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [RouterModule,CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
