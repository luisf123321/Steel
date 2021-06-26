import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import {ComponentsComponent} from './components/components.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component:HomeComponent },
  { path:'buscar', component:BusquedaComponent },
  { path:'login', component:LoginComponent},
  { path:'registro', component:RegistroComponent},
  { path: 'components', component: ComponentsComponent, loadChildren: './components/components.module#ComponentModule'}, // Carga de forma dinamica. Un modulo independiente.
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
