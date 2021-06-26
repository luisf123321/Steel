import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.models';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @HostBinding('attr.class') css = 'col-lg-4';

  @Input() libro = Libro; 

  constructor() { }

  ngOnInit() {
    
  }

}
