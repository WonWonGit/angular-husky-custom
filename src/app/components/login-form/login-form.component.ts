import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ButtonType } from '../atoms/button/button.component';
import { InputType } from '../atoms/input/input.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;

  inputError = InputType.ERROR;
  inputPrimary = InputType.PRIMARY;
  inputLoading = InputType.LOADING;

  buttonError = ButtonType.ERROR;
  buttonPrimary = ButtonType.PRIMARY;

  @Input() subtitle: string = 'Hello, Welcome to my test page!';

  buttonType: ButtonType = ButtonType.PRIMARY;

  buttonLabel: string = 'Login';

  inputClassName: InputType = InputType.PRIMARY;

  buttonDisable: boolean = false;

  emailSubscription: Subscription = new Subscription();

  pwdSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.email],
      password: [
        '',
        Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
      ],
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.emailSubscription = this.loginForm.controls[
      'userId'
    ].valueChanges?.subscribe(() => {
      if (this.loginForm.controls['userId'].errors?.email) {
        this.buttonType = ButtonType.ERROR;
      } else {
        this.buttonType = ButtonType.PRIMARY;
      }
    });

    this.pwdSubscription = this.loginForm.controls[
      'password'
    ].valueChanges?.subscribe(() => {
      if (this.loginForm.controls['password'].errors?.pattern) {
        this.buttonType = ButtonType.ERROR;
      } else {
        this.buttonType = ButtonType.PRIMARY;
      }
    });
  }

  testClick() {
    this.buttonType = ButtonType.LOADING;
  }
}
