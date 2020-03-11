import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function ingresar(){
var usuario = "hola";
var pass = "bebe"; 

if(usuario == "hola" && pass == "bebe"){
  document.write("ingresaste bien");
}else {
  document.write("Fallaste naco");
}}
