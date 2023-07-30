import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Функцията, която ще валидира дали паролите съвпадат
function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ mismatch: true });
  } else {
    confirmPassword?.setErrors(null); // Reset the error if passwords match
  }
  return null;
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup | any;
  submitted: boolean = false;
  message: string = '';
  emailExists: boolean = false;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {
      //  Ако в URL адреса има параметър emailExists: true
      if (params['emailExists']) {
        // създаваме съобщение за потребителя
        this.message = 'Този email вече е зает. Моля, въведете друг.';
        this.emailExists = true; // Задаваме стойност на emailExists
      }
    });

    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      {
        validators: passwordValidator, // Добавяме валидатора
      }
    );
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth
      .register(user)
      .subscribe(
        () => {
          this.router.navigate(['admin']);
        },
        (error) => {
          if (error.error?.error?.message === 'EMAIL_EXISTS') {
            this.emailExists = true;
            this.message = 'Този email вече е зает. Моля, въведете друг.';
          }
        }
      );
      }
}
