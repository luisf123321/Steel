import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EditorialService } from 'src/app/services/services.index';


@Component({
  selector: 'app-add-editorial',
  templateUrl: './add-editorial.component.html',
  styleUrls: ['./add-editorial.component.css']
})
export class AddEditorialComponent implements OnInit {

  editorialForm = this.fb.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    correo: ['', Validators.required],
    maximo: ['']
  })

  constructor(private fb: FormBuilder,private editorialservices:EditorialService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.editorialForm.value);
    let nombre = this.editorialForm.value['nombre'];
    let direccion = this.editorialForm.value['direccion'];
    let telefono = this.editorialForm.value['telefono'];
    let maximo = this.editorialForm.value['maximo'];
    let correo = this.editorialForm.value['correo'];
    this.editorialservices.sendForm(nombre,telefono,correo,maximo,direccion);
    this.editorialservices.editorialSave().subscribe();
  }

}
