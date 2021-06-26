import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/services.index';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {

  autorForm = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    ciudad: ['', Validators.required],
    fecha: ['', Validators.required]    
  });

  constructor(private autorservices:AutorService,private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.autorForm.value);
    let nombre = this.autorForm.value['nombre'];
    let ciudad = this.autorForm.value['ciudad'];
    let correo = this.autorForm.value['correo'];
    let fecha = this.autorForm.value['fecha'];
    this.autorservices.sendForm(nombre,fecha,correo,ciudad);
    this.autorservices.autorSave().subscribe();
  }

}
