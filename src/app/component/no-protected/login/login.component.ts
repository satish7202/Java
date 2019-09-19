import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/auth-service/authService';
import { EventService } from 'src/app/Data-service/event.service';
import { BackOfficeService } from '../../protect-component/AdviserComponent/backOffice/back-office.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, private eventService:EventService,
    public backOfficeService:BackOfficeService,
    public router: Router,
    private authService: AuthService) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }
  
  getError() {
    return ' *This is required feild'
  }
  cancel(): void {
    this.loginForm.reset();
  }

  enterEvent(event){
    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }

  onSubmit() {
    this.authService.setToken('12333nhsdhdh1233')
    this.authService.setUserInfo('https://res.cloudinary.com/futurewise/image/upload/v1566029063/icons_fakfxf.png')
    this.router.navigate(['/admin/subscription']);
    if (this.loginForm.valid) {
       let loginData={
        name:this.loginForm.controls['name'].value,
        password:this.loginForm.controls['password'].value,
        id:0,
        role: "admin"
       }
       console.log(loginData)
        this.backOfficeService.loginApi(loginData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )}
     
  }

  closeDialog(data) {
    let loginData = data;
    console.log(data)
    if(data.status === 200){
        this.authService.setToken(loginData.payLoad);
        this.eventService.openSnackBar('Login SuccessFully ','dismiss')
        this.router.navigate(['/admin/service'])
    }
    
    else{
       this.eventService.openSnackBar(loginData.message,'dismiss')
    }
  }

}

