import { Component, OnInit } from '@angular/core';
import { Editorial } from 'src/app/models/editorial.models';
import { EditorialService } from 'src/app/services/services.index';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {

  editoriales:Editorial[];

  constructor(public editorialservices:EditorialService) { }

  ngOnInit() {
    this.cargarEditoriales();
  }

  cargarEditoriales(){
    this.editorialservices.cargarEditoriales().subscribe(editoriales=>this.editoriales=editoriales);
  }

}
