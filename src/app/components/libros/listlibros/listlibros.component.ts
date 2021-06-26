import { Component, HostBinding, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.models';
import { LibroService } from 'src/app/services/services.index';

@Component({
  selector: 'app-listlibros',
  templateUrl: './listlibros.component.html',
  styleUrls: ['./listlibros.component.css']
})
export class ListlibrosComponent implements OnInit {
  

  libros:Libro[]=[];

  constructor(public libroservice:LibroService) { }

  ngOnInit() {
    this.cargarLibros();
  }


  cargarLibros(){
    this.libroservice.cargarLibros().subscribe(libros => {this.libros = libros;console.log(this.libros)});
    //console.log(this.libro);
  }

}
