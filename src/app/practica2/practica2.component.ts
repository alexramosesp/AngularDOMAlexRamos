import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {yellowSubmarine} from './funcions'
import {changeSize} from './funcions'
import {wordCount} from './funcions'

@Component({
  selector: 'app-practica2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practica2.component.html',
  styleUrl: './practica2.component.css'
})
export class Practica2Component {
  URL: string | undefined
  count: any
  imagePath: string
  constructor() {
    this.imagePath = 'assets/foto.jpg'
  }
  ngOnInit() {
    let texto = document.getElementById("exercici1");
    // @ts-ignore
    texto.textContent = texto.textContent.toUpperCase()
    this.URL = document.location.href
    yellowSubmarine('exercici3')
    changeSize('table')
    this.count = wordCount('exercici6');
    console.log('Word count:', this.count);
  }

  protected readonly wordCount = wordCount;
}
