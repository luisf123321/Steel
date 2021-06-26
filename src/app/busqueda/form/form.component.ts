import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Libro } from 'src/app/models/libro.models';
import { LibroService } from 'src/app/services/services.index';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  libros:Libro[];

  buscarForm = this.fb.group({
    nombre: ['', Validators.required],
    opcion: [''],
  })

  constructor(public libroservice:LibroService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cargarLibros();
  }

  onSubmit(){
    
  }

  cargarLibros(){
    this.libroservice.cargarLibros().subscribe(libros => {this.libros = libros;console.log(this.libros)});
    //console.log(this.libro);
  }

}
