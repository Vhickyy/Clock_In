import { Component } from '@angular/core';
import { HomeHero } from './components/home-hero/home-hero';

@Component({
  imports: [HomeHero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
