import { Component } from '@angular/core';
import { HomeHero } from './components/home-hero/home-hero';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  imports: [HomeHero, Navbar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
