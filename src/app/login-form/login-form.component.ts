import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private loginPage: FormGroup;
  private invalidLogin: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: AuthenticationService) { }

  onSubmit(crediantials){

    return this.service.login(crediantials)
    .subscribe(results =>{

      if(results){

        this.router.navigate([
          '/wallpage'
        ]);

      }else{
        this.invalidLogin = true;
        console.log("Login failed:");
      }
    })
    
  }

  get email(){

    return this.loginPage.get('email');
  }

  get password(){

    return this.loginPage.get('password');
  }

  ngOnInit() {

    this.loginPage = this.formBuilder.group({

      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]

    });
  }

  isValidForm(field: string){

    return this.loginPage.get(field).touched && !this.loginPage.get(field).valid;
  }

  displayCssField(field: string){

    return {
      'has-error': this.isValidForm(field),
      'has-feedback': this.isValidForm(field)
    };
  }
  
  validateForm(form: FormGroup){

    Object.keys(form.controls).forEach(fields =>{

      const field = form.get(fields);

      if(field instanceof FormControl){

        return this.loginPage.markAsTouched();

      }else if(field instanceof FormGroup){

        return this.validateForm(this.loginPage);
      }
    });
  }
}
