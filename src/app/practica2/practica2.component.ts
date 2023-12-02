import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {selectInDIV} from './funcions.js'

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
    let texto2 = document.getElementById("exercici1");
    // @ts-ignore
    texto2 = document.getElementById("select").innerHTML;
    // @ts-ignore
    texto.textContent = texto.textContent.toUpperCase()
    this.URL = document.location.href
  }


}
