import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditorialesComponent } from './components/editoriales/editoriales.component';
import { AutoresComponent } from './components/autores/autores.component';
import { ListlibrosComponent } from './components/libros/listlibros/listlibros.component';
import { LibroComponent } from './components/libros/libro/libro.component';
import { ComponentsComponent } from './components/components.component';
import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesModule } from './services/services.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormComponent } from './busqueda/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    SharedComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    BusquedaComponent,
    FormComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
