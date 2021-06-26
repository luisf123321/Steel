import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AutorService,
    EditorialService,
    LibroService
} from './services.index';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ], providers:[
        AutorService,
        EditorialService,
        LibroService
    ],
    declarations: []
})
export class ServicesModule {}