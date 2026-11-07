import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  imports: [Navbar, RouterModule],
  selector: 'app-public-layout',
  styleUrl: './public-layout.css',
  templateUrl: './public-layout.html',
})
export class PublicLayout {}
