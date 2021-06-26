import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Editorial } from 'src/app/models/editorial.models';
import Swal from 'sweetalert2'
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  editorial:Editorial = {
    Nombre:null,
    Direccion:null,
    Correo:null,
    Telefono:null,
    Max_Libro:null
  }

  constructor(public http: HttpClient, public router: Router) { }

  cargarEditoriales(){
    let url = URL_SERVICIOS + '/Editorial' ;
    return this.http.get(url).pipe(map((resp: any) => {
        //this.totalSemilleros = resp.total;
        console.log(resp.editoriales);
        return resp.editoriales;
    }));
  }

  sendForm(nombre:any, telefono:any, correo:any,maximo:any,direccion:any){
    this.editorial.Correo=correo;
    this.editorial.Direccion=direccion;
    this.editorial.Max_Libro=maximo;
    this.editorial.Nombre=nombre;
    this.editorial.Telefono=telefono;
  }


  editorialSave(){
    let url = URL_SERVICIOS + '/Editorial' ;
    return this.http.post(url,this.editorial).pipe(map((resp:any)=>{
      console.log(resp);
      Swal.fire('Editorial Creada', 'Nombre:'+ resp.editorial.Nombre +' id: '+resp.editorial._id, 'success');
    }), catchError(err => {
      console.log("catch")
      Swal.fire('Error En El Envio', err.error.mensaje, 'error');
      return throwError(err);
    }))
  }
}
