import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../shared/interfaces';
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-add-audiobook',
  templateUrl: './add-audiobook.component.html',
  styleUrls: ['./add-audiobook.component.scss'],
})
export class AddAudiobookComponent implements OnInit {
  form: FormGroup | any;
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      narrator: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const post: Post = {
      title: this.form.value.title,
      text: this.form.value.text,
      narrator: this.form.value.narrator,
      date: new Date(),
    };
    console.log(post);
  }
}
