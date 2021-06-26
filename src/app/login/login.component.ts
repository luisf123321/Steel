import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private usuarioservices :UsuarioService,public router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    let username = this.loginForm.value['username'];
    let password = this.loginForm.value['password'];
    this.usuarioservices.sendForm(null,null,null,null,null,null,username,password);
    this.usuarioservices.login().subscribe(correcto => this.router.navigate(['/home']));
  }

}
