import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', Validators.required],
    ciudad: ['', Validators.required],
    fecha: ['', Validators.required],
    numero: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  
  })

  constructor(private fb: FormBuilder, private usuarioservices :UsuarioService,public router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registroForm.value);
    let nombre = this.registroForm.value['nombre'];
    let apellido = this.registroForm.value['apellido'];
    let correo = this.registroForm.value['correo'];
    let ciudad = this.registroForm.value['ciudad'];
    let fecha = this.registroForm.value['fecha'];
    let numero = this.registroForm.value['numero'];
    let username = this.registroForm.value['username'];
    let password = this.registroForm.value['password'];
    this.usuarioservices.sendForm(nombre,apellido,correo,ciudad,fecha,numero,username,password);
    this.usuarioservices.usuarioSave().subscribe(correcto => this.router.navigate(['/login']));
  }

}
