import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import {Libro} from './../../models/libro.models'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap  } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { Observable, throwError } from "rxjs";


@Injectable()
export class LibroService {
  
  libro:Libro ={
    Titulo:null,
    Genero:null,
    Paginas:null,
    Editorial:null,
    Autor:null

  };

  constructor(public http: HttpClient, public router: Router) { }

  cargarLibros(desde: number = 0) {
    let url = URL_SERVICIOS + '/Libro/list' ;
    return this.http.get(url).pipe(map((resp: any) => {
        //this.totalSemilleros = resp.total;
        console.log(resp.libros);
        return resp.libros;
    }));
  }

  sendform(titulo:any,genero:any,paginas:any,autor:any,editorial:any){
    this.libro.Autor=autor;
    this.libro.Editorial=editorial;
    this.libro.Genero=genero;
    this.libro.Paginas=paginas;
    this.libro.Titulo=titulo
  }

  libroSave(){
    let url = URL_SERVICIOS + '/Libro' ;
    console.log("sii post");
    console.log(this.libro);
    return this.http.post(url,this.libro).pipe(map((resp:any)=>{
      console.log("map");
      console.log(resp);
      Swal.fire('Libro Creado', 'Nombre:'+ resp.libro.Titulo +' id: '+resp.libro._id, 'success');                
    }), catchError(err => {
      console.log("catch")
      Swal.fire('Error En El Envio', err.error.mensaje, 'error');
      return throwError(err);
    }));
  }






}
