import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Autor } from 'src/app/models/autor.models';
import { Editorial } from 'src/app/models/editorial.models';
import { AutorService, EditorialService, LibroService } from 'src/app/services/services.index';


@Component({
  selector: 'app-addlibros',
  templateUrl: './addlibros.component.html',
  styleUrls: ['./addlibros.component.css']
})
export class AddlibrosComponent implements OnInit {
  libroForm = this.fb.group({
    nombre: ['', Validators.required],
    genero: ['', Validators.required],
    paginas: ['', Validators.required],
    autor:[''],
    editorial:['']
  });

  autores:Autor[];
  editoriales:Editorial[];

  constructor(private fb: FormBuilder,private autorservices:AutorService,private editorialservices:EditorialService, private libroservices:LibroService) { }


  ngOnInit() {
    this.cargarAutores();
    this.cargarEditoriales();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.libroForm.value['nombre']);
    let titulo = this.libroForm.value['nombre'];
    let genero = this.libroForm.value['genero'];
    let paginas = this.libroForm.value['paginas'];
    let autor = this.libroForm.value['autor'];
    let editorial = this.libroForm.value['editorial'];
    this.libroservices.sendform(titulo,genero,paginas,autor,editorial);
    this.libroservices.libroSave().subscribe();
  }

  cargarAutores(){
    this.autorservices.cargarAutores().subscribe(autores=>this.autores=autores);
  }

  cargarEditoriales(){
    this.editorialservices.cargarEditoriales().subscribe(editoriales => this.editoriales=editoriales);    
  }

}
