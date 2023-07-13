import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../shared/interfaces';

@Component({
  selector: 'app-add-audiobook',
  templateUrl: './add-audiobook.component.html',
  styleUrls: ['./add-audiobook.component.scss'],
})
export class AddAudiobookComponent implements OnInit {
  form: FormGroup | any;
  text: any;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      narrator: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.valid) {
      return;
    }
   const post: Post = {
      title: this.form.value.title,
      narrator: this.form.value.narrator,
      text: this.form.value.text,
      date: new Date(),
    };
  }
}
