import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "celular XL", descricao: "celular grande", esgotado: false},
    {id: 2, nome: "celular PK", esgotado: false},
    {id: 3, nome: "celular OV", descricao: "celular medio", esgotado: true},
  ]
}
