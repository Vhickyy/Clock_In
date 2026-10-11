import { Component } from '@angular/core';
import { Text } from '../components/app-ui/text/text';
import { Button } from '../components/app-ui/button/button';

@Component({
  imports: [Text, Button],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}
