import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Autor } from 'src/app/models/autor.models';
import Swal from 'sweetalert2'
import { Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AutorService {
  autor:Autor={
    Nombre:null,
    Correo:null,
    Fecha_Nacimiento:null,
    Ciudad:null
  };
  constructor(public http: HttpClient, public router: Router) { }


  cargarAutores() {
    let url = URL_SERVICIOS + '/Autor' ;
    return this.http.get(url).pipe(map((resp: any) => {
        //this.totalSemilleros = resp.total;
        console.log(resp.autores);
        return resp.autores;
    }));
  }

  sendForm (nombre:any,fecha:any,correo:any, ciudad:any){
        this.autor.Ciudad=ciudad;
        this.autor.Nombre=nombre;
        this.autor.Correo=correo;
        this.autor.Fecha_Nacimiento=fecha;
  }

  autorSave() {
    let url = URL_SERVICIOS + '/Autor' ;
    return this.http.post(url,this.autor).pipe(map((resp:any)=>{
      console.log(resp);
      Swal.fire('Autor Creado', 'Nombre:'+ resp.autor.Nombre +' id: '+resp.autor._id, 'success');
    }),catchError(err => {
      console.log("catch")
      Swal.fire('Error En El Envio', err.error.mensaje, 'error');
      return throwError(err);
    }))
  }
}
