import { Routes, RouterModule } from '@angular/router';
import {LibrosComponent} from './libros/libros.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { AutoresComponent } from './autores/autores.component';
import { AddlibrosComponent } from './libros/addlibros/addlibros.component';
import { AddAutorComponent } from './autores/add-autor/add-autor.component';
import { AddEditorialComponent } from './editoriales/add-editorial/add-editorial.component';

const pagesRouter: Routes = [
    {path:"editorial",component:EditorialesComponent},
    {path:"Libros",component:LibrosComponent},
    {path:"LibrosAdd",component:AddlibrosComponent},
    {path:"autores",component:AutoresComponent},
    {path:"autoresAdd",component:AddAutorComponent},
    {path:"editorialAdd",component:AddEditorialComponent}
];

export const COMPONENTS_ROUTES = RouterModule.forChild(pagesRouter);
