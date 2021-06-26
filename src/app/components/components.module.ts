import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS_ROUTES} from './components.router';
import {LibrosComponent} from './libros/libros.component'
import { EditorialesComponent } from './editoriales/editoriales.component';
import { AutoresComponent } from './autores/autores.component';
import { ListlibrosComponent } from './libros/listlibros/listlibros.component';
import { LibroComponent } from './libros/libro/libro.component';
import { AddlibrosComponent } from './libros/addlibros/addlibros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAutorComponent } from './autores/add-autor/add-autor.component';
import { AddEditorialComponent } from './editoriales/add-editorial/add-editorial.component';
@NgModule({
    declarations:[
        LibrosComponent,
        LibroComponent,
        EditorialesComponent,
        ListlibrosComponent,
        AutoresComponent,
        AddlibrosComponent,
        AddAutorComponent,
        AddEditorialComponent
    ],
    imports:[
        COMPONENTS_ROUTES,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]

})
export class ComponentModule {}