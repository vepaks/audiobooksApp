import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup | any;
  submitted: boolean = false;
  message: string = '';
  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute)
  {
  }

  ngOnInit() {
    //   полчаваме параметъра от URL адреса като Observable
    this.route.queryParams.subscribe((params: Params) => {
    //  Ако в URL адреса има параметър loginAgain: true
      if (params['loginAgain']) {
        // съзадваме съобщение за потребителя
        this.message = 'Моля, въведете данните си';
      } else if (params['authFailed']) {
        this.message = "Сесията изтече. Въведете данни отново."
      } else if (params['emailExists']) {
        this.message = "Този email вече съществува. Моля, въведете данните му."
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    //Правим флаг за да предпазим многократно натискане на бутона по време на заявка
    this.submitted = true;

    //създаваме променлива с обект - стойностите от формата
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.auth.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/admin', 'dashboard']);
        // След приключване на събитието връщаме значението на флага
        this.submitted = false;
      },
      // Ако има грешка също превключва флага.
      () => {
        this.submitted = false;
      }
    );
  }
}
