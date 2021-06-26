import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.models';
import { AutorService } from 'src/app/services/services.index';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores: Autor[];
  constructor(public autorservices :AutorService) { }

  ngOnInit() {
    this.cargarAutores();
  }

  cargarAutores(){
    this.autorservices.cargarAutores().subscribe(autores=>this.autores=autores);
  }

}
