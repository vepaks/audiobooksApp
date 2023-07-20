import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AudiobooksService } from '../../shared/audiobooks.service';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../shared/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  form: FormGroup | any;

  constructor(
    private route: ActivatedRoute,
    private audiobooksService: AudiobooksService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.audiobooksService.getById(params['id']);
        })
      )
      .subscribe((audiobook: Post) => {
        this.form = new FormGroup<any>({
          title: new FormControl(audiobook.title, Validators.required),
          text: new FormControl(audiobook.text, Validators.required),
          narrator: new FormControl(audiobook.narrator, Validators.required),
        });
      });
  }

  submit() {

  }
}
