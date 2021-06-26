import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap  } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { Observable, throwError } from "rxjs";
import { Usuario } from 'src/app/models/Usuario.models';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario : Usuario={
    Nombre:null,
    Apellido:null,
    Ciudad:null,
    Correo:null,
    Username:null,
    Password:null,
    NumeroDocumento:null,
    Fecha_Nacimiento:null
  };

  constructor(public http: HttpClient, public router: Router) { }


  sendForm(nombre:any,apellido:any,correo:any,ciudad:any,fecha:any,numero:any,username:any,password:any){
    this.usuario.Nombre= nombre;
    this.usuario.Apellido = apellido;
    this.usuario.Correo = correo;
    this.usuario.Ciudad = ciudad;
    this.usuario.NumeroDocumento = numero;
    this.usuario.Fecha_Nacimiento = fecha;
    this.usuario.Username = username;
    this.usuario.Password = password;
  }


  usuarioSave(){
    let url = URL_SERVICIOS + '/Usuario' ;
    return this.http.post(url,this.usuario).pipe(map((resp:any)=>{
      console.log("map");
      console.log(resp);
      Swal.fire('Registro De Usuario Exitoso', 'Nombre:'+ resp.usuario.Nombre +' id: '+resp.usuario._id, 'success');                
    }), catchError(err => {
      console.log("catch")
      Swal.fire('Error En El Envio', err.error.mensaje, 'error');
      return throwError(err);
    }));
  }

  login(){
    let url = URL_SERVICIOS + '/Login' ;
    return this.http.post(url,this.usuario).pipe(map((resp:any)=>{
      console.log("map");
      console.log(resp);
      Swal.fire('Login Exitoso', 'Bienvenido:'+ resp.usuario.Username +' token '+ resp.token ,'success');                
    }), catchError(err => {
      console.log("catch")
      Swal.fire('Error En El Envio', err.error.mensaje, 'error');
      return throwError(err);
    }));

  }


}
